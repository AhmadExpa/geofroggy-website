'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getFirebaseAuth } from '@/lib/firebaseClient';
import { useAuth } from '@/context/AuthContext';
import ConfirmationModal from './ConfirmationModal';

type Post = {
    id: string;
    title?: string;
    slug?: string;
    categoryId?: string;
    content?: string;
    featured?: boolean;
};

type Category = {
    id: string;
    name?: string;
};

const inputClass =
    'w-full pl-3 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4a5f] focus:border-transparent text-sm';

const buttonClass =
    'px-4 py-2 bg-[#0d4a5f] text-white font-semibold rounded-lg hover:bg-[#0a3a4d] transition-colors text-sm disabled:opacity-80';

const PostsManager = () => {
    const { role } = useAuth();
    const isAdmin = role === 'admin';
    const [posts, setPosts] = useState<Post[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [authError, setAuthError] = useState<string | null>(null);

    const [postForm, setPostForm] = useState<{
        id?: string;
        title: string;
        slug: string;
        categoryId: string;
        content: string;
        featured: boolean
    }>({
        title: '',
        slug: '',
        categoryId: '',
        content: '',
        featured: false
    });

    const [savingPost, setSavingPost] = useState(false);
    const [loadingData, setLoadingData] = useState(false);

    const postButtonLabel = useMemo(
        () => (postForm.id ? 'Update Post' : 'Create Post'),
        [postForm.id],
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

    const loadPosts = useCallback(async () => {
        // Assuming we have an admin list endpoint or similar. 
        // For now using the public one, but for admin we might want one without limits or special handling
        // But since no specific admin/posts GET exists yet, we use /api/posts and maybe filter locally? 
        // Or we create /api/admin/posts which supports paging properly.
        // Let's assume I will create /api/admin/posts for this table.
        const res = await fetchWithAuth('/api/admin/posts');
        const payload = await res.json();
        if (payload?.ok) {
            setPosts(payload.data?.items || []);
        }
    }, [fetchWithAuth]);

    useEffect(() => {
        if (isAdmin) {
            setLoadingData(true);
            Promise.all([loadCategories(), loadPosts()]).finally(() => setLoadingData(false));
        }
    }, [isAdmin, loadCategories, loadPosts]);

    const handlePostSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isAdmin) return;
        setSavingPost(true);
        setAuthError(null);

        try {
            const payload = {
                title: postForm.title.trim(),
                slug: postForm.slug.trim(),
                categoryId: postForm.categoryId,
                content: postForm.content,
                featured: postForm.featured,
            };

            const url = postForm.id
                ? `/api/admin/posts/${postForm.id}`
                : '/api/admin/posts';
            const method = postForm.id ? 'PUT' : 'POST';

            const res = await fetchWithAuth(url, {
                method,
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (!res.ok || !data?.ok) {
                setAuthError(data?.error || 'Unable to save post.');
                return;
            }

            setPostForm({ title: '', slug: '', categoryId: '', content: '', featured: false, id: undefined });
            await loadPosts();
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : 'Unable to save post.');
        } finally {
            setSavingPost(false);
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

    const handlePostDelete = async () => {
        const id = deleteModal.id;
        if (!isAdmin || !id) return;

        setIsDeleting(true);

        try {
            const res = await fetchWithAuth(`/api/admin/posts/${id}`, { method: 'DELETE' });
            const data = await res.json();

            if (!res.ok || !data?.ok) {
                setAuthError(data?.error || 'Unable to delete post.');
                setDeleteModal({ isOpen: false, id: null });
                return;
            }

            await loadPosts();
            setDeleteModal({ isOpen: false, id: null });
        } catch (error) {
            setAuthError(error instanceof Error ? error.message : 'Unable to delete post.');
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
                        <h2 className="text-xl font-semibold text-gray-900">Posts Management</h2>
                        <p className="text-sm text-gray-600">Create and manage content posts.</p>
                    </div>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600 font-medium">{posts.length} items</span>
                </div>

                {authError && (
                    <div className="border border-red-200 bg-red-50 text-red-700 rounded-lg px-4 py-3 text-sm">
                        {authError}
                    </div>
                )}

                <form onSubmit={handlePostSubmit} className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Title</label>
                        <input
                            className={inputClass}
                            placeholder="Post Title"
                            value={postForm.title}
                            onChange={(e) => setPostForm((prev) => ({ ...prev, title: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Slug</label>
                        <input
                            className={inputClass}
                            placeholder="post-url-slug"
                            value={postForm.slug}
                            onChange={(e) => setPostForm((prev) => ({ ...prev, slug: e.target.value }))}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Category</label>
                        <select
                            className={inputClass}
                            value={postForm.categoryId}
                            onChange={(e) => setPostForm((prev) => ({ ...prev, categoryId: e.target.value }))}
                            required
                        >
                            <option value="">Select Category</option>
                            {categories.map((c) => (
                                <option key={c.id} value={c.id}>{c.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-1 flex items-center pt-6">
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={postForm.featured}
                                onChange={(e) => setPostForm((prev) => ({ ...prev, featured: e.target.checked }))}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0d4a5f]"></div>
                            <span className="ms-3 text-sm font-medium text-gray-700">Featured</span>
                        </label>
                    </div>

                    <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Content</label>
                        <textarea
                            className={`${inputClass} h-32`}
                            placeholder="Post content..."
                            value={postForm.content}
                            onChange={(e) => setPostForm((prev) => ({ ...prev, content: e.target.value }))}
                        />

                        <div className="p-3 bg-yellow-50 text-yellow-800 text-xs rounded border border-yellow-200 mt-2">
                            <strong>Note:</strong> Image upload will be enabled once storage is available.
                        </div>
                    </div>

                    <div className="md:col-span-2 flex items-center gap-3 pt-2">
                        <button type="submit" disabled={savingPost} className={buttonClass}>
                            {savingPost ? 'Saving...' : postButtonLabel}
                        </button>
                        {postForm.id && (
                            <button
                                type="button"
                                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                                onClick={() => setPostForm({ title: '', slug: '', categoryId: '', content: '', featured: false, id: undefined })}
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

                    <div className="grid gap-4 md:grid-cols-1">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white gap-4"
                            >
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-gray-900 truncate">{post.title || 'Untitled'}</h3>
                                    <p className="text-xs text-gray-500 truncate">{post.slug}</p>
                                    <div className="flex gap-2 mt-1">
                                        {post.featured && <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Featured</span>}
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                            {categories.find(c => c.id === post.categoryId)?.name || 'Uncategorized'}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 self-end sm:self-center">
                                    <button
                                        type="button"
                                        className="text-sm text-[#0d4a5f] font-semibold hover:underline"
                                        onClick={() =>
                                            setPostForm({
                                                id: post.id,
                                                title: post.title || '',
                                                slug: post.slug || '',
                                                categoryId: post.categoryId || '',
                                                content: post.content || '',
                                                featured: post.featured || false,
                                            })
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="text-sm text-red-600 font-semibold hover:underline"
                                        onClick={() => confirmDelete(post.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                        {!posts.length && !loadingData && (
                            <div className="py-10 text-center text-sm text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                                No posts found.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <ConfirmationModal
                isOpen={deleteModal.isOpen}
                onClose={() => setDeleteModal({ isOpen: false, id: null })}
                onConfirm={handlePostDelete}
                title="Delete Post"
                message="Are you sure you want to delete this post? This action cannot be undone."
                isLoading={isDeleting}
            />
        </>
    );
};

export default PostsManager;
