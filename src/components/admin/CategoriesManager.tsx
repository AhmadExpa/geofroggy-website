'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getFirebaseAuth } from '@/lib/firebaseClient';
import { useAuth } from '@/context/AuthContext';
import ConfirmationModal from './ConfirmationModal';

type Category = {
    id: string;
    name?: string;
    slug?: string;
};

const inputClass =
    'w-full pl-3 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4a5f] focus:border-transparent text-sm';

const buttonClass =
    'px-4 py-2 bg-[#0d4a5f] text-white font-semibold rounded-lg hover:bg-[#0a3a4d] transition-colors text-sm disabled:opacity-80';

const CategoriesManager = () => {
    const { user, role } = useAuth();
    const isAdmin = role === 'admin';
    const [categories, setCategories] = useState<Category[]>([]);
    const [authError, setAuthError] = useState<string | null>(null);
    const [categoryForm, setCategoryForm] = useState<{ id?: string; name: string; slug: string }>({
        name: '',
        slug: '',
    });

    const [savingCategory, setSavingCategory] = useState(false);
    const [loadingData, setLoadingData] = useState(false);

    const categoryButtonLabel = useMemo(
        () => (categoryForm.id ? 'Update Category' : 'Create Category'),
        [categoryForm.id],
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

    const loadCategories = useCallback(async () => {
        const res = await fetch('/api/categories');
        const payload = await res.json();
        if (payload?.ok) {
            setCategories(payload.data || []);
        }
    }, []);

    useEffect(() => {
        if (isAdmin) {
            setLoadingData(true);
            loadCategories().finally(() => setLoadingData(false));
        }
    }, [isAdmin, loadCategories]);

    const handleCategorySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isAdmin) return;
        setSavingCategory(true);
        setAuthError(null);

        try {
            const payload = {
                name: categoryForm.name.trim(),
                slug: categoryForm.slug.trim(),
            };

            const url = categoryForm.id
                ? `/api/admin/categories/${categoryForm.id}`
                : '/api/admin/categories';
            const method = categoryForm.id ? 'PUT' : 'POST';

            const res = await fetchWithAuth(url, {
                method,
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (!res.ok || !data?.ok) {
                setAuthError(data?.error || 'Unable to save category.');
                return;
            }

            setCategoryForm({ id: undefined, name: '', slug: '' });
            await loadCategories();
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : 'Unable to save category.');
        } finally {
            setSavingCategory(false);
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

    const handleCategoryDelete = async () => {
        const id = deleteModal.id;
        if (!isAdmin || !id) return;

        setIsDeleting(true);

        try {
            const res = await fetchWithAuth(`/api/admin/categories/${id}`, { method: 'DELETE' });
            const data = await res.json();

            if (!res.ok || !data?.ok) {
                setAuthError(data?.error || 'Unable to delete category.');
                setDeleteModal({ isOpen: false, id: null });
                return;
            }

            await loadCategories();
            setDeleteModal({ isOpen: false, id: null });
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : 'Unable to delete category.');
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
                        <h2 className="text-xl font-semibold text-gray-900">Categories Management</h2>
                        <p className="text-sm text-gray-600">Create, edit, or remove content categories.</p>
                    </div>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600 font-medium">{categories.length} items</span>
                </div>

                {authError && (
                    <div className="border border-red-200 bg-red-50 text-red-700 rounded-lg px-4 py-3 text-sm">
                        {authError}
                    </div>
                )}

                <form onSubmit={handleCategorySubmit} className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Name</label>
                        <input
                            className={inputClass}
                            placeholder="e.g. Technology"
                            value={categoryForm.name}
                            onChange={(e) => setCategoryForm((prev) => ({ ...prev, name: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Slug</label>
                        <input
                            className={inputClass}
                            placeholder="e.g. technology"
                            value={categoryForm.slug}
                            onChange={(e) => setCategoryForm((prev) => ({ ...prev, slug: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="md:col-span-1 lg:col-span-2 flex items-center gap-3 pt-2">
                        <button type="submit" disabled={savingCategory} className={buttonClass}>
                            {savingCategory ? 'Saving...' : categoryButtonLabel}
                        </button>
                        {categoryForm.id && (
                            <button
                                type="button"
                                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                                onClick={() => setCategoryForm({ id: undefined, name: '', slug: '' })}
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

                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {categories.map((category) => (
                                    <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.slug}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                type="button"
                                                className="text-[#0d4a5f] hover:text-[#0a3a4d] mr-4 transition-colors"
                                                onClick={() =>
                                                    setCategoryForm({ id: category.id, name: category.name || '', slug: category.slug || '' })
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                className="text-red-600 hover:text-red-900 transition-colors"
                                                onClick={() => confirmDelete(category.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {!categories.length && !loadingData && (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-10 text-center text-sm text-gray-500">
                                            No categories found. Start by adding one above.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <ConfirmationModal
                isOpen={deleteModal.isOpen}
                onClose={() => setDeleteModal({ isOpen: false, id: null })}
                onConfirm={handleCategoryDelete}
                title="Delete Category"
                message="Are you sure you want to delete this category? This action cannot be undone."
                isLoading={isDeleting}
            />
        </>
    );
};

export default CategoriesManager;
