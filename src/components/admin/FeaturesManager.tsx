'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getFirebaseAuth } from '@/lib/firebaseClient';
import { useAuth } from '@/context/AuthContext';
import ConfirmationModal from './ConfirmationModal';

type FeaturedItem = {
    id: string;
    type?: string;
    refId?: string;
    order?: number;
};

const inputClass =
    'w-full pl-3 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4a5f] focus:border-transparent text-sm';

const buttonClass =
    'px-4 py-2 bg-[#0d4a5f] text-white font-semibold rounded-lg hover:bg-[#0a3a4d] transition-colors text-sm disabled:opacity-80';

const FeaturesManager = () => {
    const { role } = useAuth();
    const isAdmin = role === 'admin';
    const [featured, setFeatured] = useState<FeaturedItem[]>([]);
    const [authError, setAuthError] = useState<string | null>(null);
    const [featuredForm, setFeaturedForm] = useState<{ id?: string; type: string; refId: string; order: string }>({
        type: '',
        refId: '',
        order: '',
    });

    const [savingFeatured, setSavingFeatured] = useState(false);
    const [loadingData, setLoadingData] = useState(false);

    const featuredButtonLabel = useMemo(
        () => (featuredForm.id ? 'Update Item' : 'Add Item'),
        [featuredForm.id],
    );

    const fetchWithAuth = useCallback(async (url: string, options: RequestInit = {}) => {
        const auth = getFirebaseAuth();
        const currentUser = auth?.currentUser || null;
        const headers = new Headers(options.headers);
        headers.set('Content-Type', 'application/json');
        if (currentUser) {
            const token = await currentUser.getIdToken();
            headers.set('Authorization', `Bearer ${token}`);
        }

        return fetch(url, { ...options, headers, credentials: 'include' });
    }, []);

    const loadFeatured = useCallback(async () => {
        const res = await fetch('/api/featured');
        const payload = await res.json();
        if (payload?.ok) {
            // Sort by order
            const sorted = (payload.data || []).sort((a: FeaturedItem, b: FeaturedItem) => (a.order || 0) - (b.order || 0));
            setFeatured(sorted);
        }
    }, []);

    useEffect(() => {
        if (isAdmin) {
            setLoadingData(true);
            loadFeatured().finally(() => setLoadingData(false));
        }
    }, [isAdmin, loadFeatured]);

    const handleFeaturedSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isAdmin) return;
        setSavingFeatured(true);
        setAuthError(null);

        try {
            const payload = {
                type: featuredForm.type.trim(),
                refId: featuredForm.refId.trim(),
                order: Number.parseInt(featuredForm.order, 10) || 0,
            };

            const url = featuredForm.id
                ? `/api/admin/featured/${featuredForm.id}`
                : '/api/admin/featured';
            const method = featuredForm.id ? 'PUT' : 'POST';

            const res = await fetchWithAuth(url, {
                method,
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (!res.ok || !data?.ok) {
                setAuthError(data?.error || 'Unable to save featured item.');
                return;
            }

            setFeaturedForm({ id: undefined, type: '', refId: '', order: '' });
            await loadFeatured();
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : 'Unable to save featured item.');
        } finally {
            setSavingFeatured(false);
        }
    };

    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; id: string | null }>({
        isOpen: false,
        id: null,
    });
    const [isDeleting, setIsDeleting] = useState(false);

    const confirmDelete = (id: string) => {
        setDeleteModal({ isOpen: true, id });
    };

    const handleFeaturedDelete = async () => {
        const id = deleteModal.id;
        if (!isAdmin || !id) return;

        setIsDeleting(true);

        try {
            const res = await fetchWithAuth(`/api/admin/featured/${id}`, { method: 'DELETE' });
            const data = await res.json();

            if (!res.ok || !data?.ok) {
                setAuthError(data?.error || 'Unable to delete featured item.');
                setDeleteModal({ isOpen: false, id: null });
                return;
            }

            await loadFeatured();
            setDeleteModal({ isOpen: false, id: null });
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : 'Unable to delete featured item.');
            setDeleteModal({ isOpen: false, id: null });
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">Featured Content</h2>
                        <p className="text-sm text-gray-600">Highlight important content on home page.</p>
                    </div>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600 font-medium">{featured.length} items</span>
                </div>

                {authError && (
                    <div className="border border-red-200 bg-red-50 text-red-700 rounded-lg px-4 py-3 text-sm">
                        {authError}
                    </div>
                )}

                <form onSubmit={handleFeaturedSubmit} className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Type</label>
                        <input
                            className={inputClass}
                            placeholder="e.g. post, event"
                            value={featuredForm.type}
                            onChange={(e) => setFeaturedForm((prev) => ({ ...prev, type: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Reference ID</label>
                        <input
                            className={inputClass}
                            placeholder="ID of content"
                            value={featuredForm.refId}
                            onChange={(e) => setFeaturedForm((prev) => ({ ...prev, refId: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Order</label>
                        <input
                            className={inputClass}
                            placeholder="Display order (0-99)"
                            value={featuredForm.order}
                            type="number"
                            onChange={(e) => setFeaturedForm((prev) => ({ ...prev, order: e.target.value }))}
                        />
                    </div>

                    <div className="md:col-span-1 lg:col-span-3 flex items-center gap-3 pt-2">
                        <button type="submit" disabled={savingFeatured} className={buttonClass}>
                            {savingFeatured ? 'Saving...' : featuredButtonLabel}
                        </button>
                        {featuredForm.id && (
                            <button
                                type="button"
                                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                                onClick={() => setFeaturedForm({ id: undefined, type: '', refId: '', order: '' })}
                            >
                                Cancel Edit
                            </button>
                        )}
                    </div>
                </form>

                <div className="space-y-3">
                    {loadingData && (
                        <div className="flex justify-center p-4">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#175883]"></div>
                        </div>
                    )}

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {featured.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col justify-between border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
                            >
                                <div className="mb-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {item.type}
                                        </span>
                                        <span className="text-xs text-gray-400 font-mono">#{item.order}</span>
                                    </div>
                                    <p className="text-sm text-gray-900 font-medium truncate" title={item.refId}>
                                        ID: {item.refId}
                                    </p>
                                </div>

                                <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
                                    <button
                                        type="button"
                                        className="text-xs text-[#0d4a5f] font-semibold hover:underline"
                                        onClick={() =>
                                            setFeaturedForm({
                                                id: item.id,
                                                type: item.type || '',
                                                refId: item.refId || '',
                                                order: typeof item.order === 'number' ? String(item.order) : '',
                                            })
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="text-xs text-red-600 font-semibold hover:underline"
                                        onClick={() => confirmDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                        {!featured.length && !loadingData && (
                            <div className="col-span-full py-10 text-center text-sm text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                                No featured items found.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <ConfirmationModal
                isOpen={deleteModal.isOpen}
                onClose={() => setDeleteModal({ isOpen: false, id: null })}
                onConfirm={handleFeaturedDelete}
                title="Delete Featured Item"
                message="Are you sure you want to delete this featured item? This action cannot be undone."
                isLoading={isDeleting}
            />
        </>
    );
};

export default FeaturesManager;
