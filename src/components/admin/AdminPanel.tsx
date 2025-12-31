'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getFirebaseAuth } from '@/lib/firebaseClient';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';

type Category = {
  id: string;
  name?: string;
  slug?: string;
};

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

const AdminPanel = () => {
  const router = useRouter();
  const [authError, setAuthError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingUser, setCheckingUser] = useState(true);

  const [categories, setCategories] = useState<Category[]>([]);
  const [featured, setFeatured] = useState<FeaturedItem[]>([]);

  const [categoryForm, setCategoryForm] = useState<{ id?: string; name: string; slug: string }>({
    name: '',
    slug: '',
  });
  const [featuredForm, setFeaturedForm] = useState<{ id?: string; type: string; refId: string; order: string }>({
    type: '',
    refId: '',
    order: '',
  });

  const [savingCategory, setSavingCategory] = useState(false);
  const [savingFeatured, setSavingFeatured] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const categoryButtonLabel = useMemo(
    () => (categoryForm.id ? 'Update Category' : 'Create Category'),
    [categoryForm.id],
  );

  const featuredButtonLabel = useMemo(
    () => (featuredForm.id ? 'Update Featured' : 'Add Featured'),
    [featuredForm.id],
  );

  const fetchWithAuth = useCallback(async (url: string, options: RequestInit = {}) => {
    // Rely on httpOnly admin cookie; attach bearer only if Firebase user is ready.
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

  const verifyAdmin = useCallback(async () => {
    const auth = getFirebaseAuth();
    const currentUser = auth?.currentUser;

    // Try server cookie-based verification first; include bearer when available.
    const headers = new Headers();
    if (currentUser) {
      const token = await currentUser.getIdToken();
      headers.set('Authorization', `Bearer ${token}`);
    }

    const res = await fetch('/api/admin/auth/verify', {
      method: 'POST',
      headers,
      credentials: 'include',
    });
    const payload = await res.json().catch(() => null);

    if (!res.ok || !payload?.ok || !payload.admin) {
      setIsAdmin(false);
      setAuthError(payload?.error || 'Admin access only.');
      if (auth && currentUser) {
        await firebaseSignOut(auth);
      }
      return;
    }

    setIsAdmin(true);
    setAuthError(null);
  }, []);

  const loadCategories = useCallback(async () => {
    const res = await fetch('/api/categories');
    const payload = await res.json();
    if (payload?.ok) {
      setCategories(payload.data || []);
    }
  }, []);

  const loadFeatured = useCallback(async () => {
    const res = await fetch('/api/featured');
    const payload = await res.json();
    if (payload?.ok) {
      setFeatured(payload.data || []);
    }
  }, []);

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) {
      setAuthError('Auth not initialized. Please check environment settings.');
      setCheckingUser(false);
      return undefined;
    }

    const unsubscribe = onAuthStateChanged(auth, async () => {
      setCheckingUser(true);
      // Always attempt server verification to honor cookie session.
      try {
        await verifyAdmin();
      } catch {
        setAuthError('Unable to verify admin session.');
        setIsAdmin(false);
      } finally {
        setCheckingUser(false);
      }
    });

    return () => unsubscribe();
  }, [verifyAdmin]);

  useEffect(() => {
    const hydrate = async () => {
      if (!isAdmin) return;
      setLoadingData(true);
      await Promise.all([loadCategories(), loadFeatured()]);
      setLoadingData(false);
    };
    hydrate();
  }, [isAdmin, loadCategories, loadFeatured]);

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

  const handleCategoryDelete = async (id: string) => {
    if (!isAdmin) return;
    const confirmDelete = window.confirm('Delete this category?');
    if (!confirmDelete) return;

    try {
      const res = await fetchWithAuth(`/api/admin/categories/${id}`, { method: 'DELETE' });
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setAuthError(data?.error || 'Unable to delete category.');
        return;
      }

      await loadCategories();
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Unable to delete category.');
    }
  };

  const handleFeaturedDelete = async (id: string) => {
    if (!isAdmin) return;
    const confirmDelete = window.confirm('Delete this featured item?');
    if (!confirmDelete) return;

    try {
      const res = await fetchWithAuth(`/api/admin/featured/${id}`, { method: 'DELETE' });
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setAuthError(data?.error || 'Unable to delete featured item.');
        return;
      }

      await loadFeatured();
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Unable to delete featured item.');
    }
  };

  const handleSignOut = async () => {
    const auth = getFirebaseAuth();
    if (auth) {
      await firebaseSignOut(auth);
    }
    await fetch('/api/admin/auth/verify', { method: 'DELETE' });
    router.push('/sign-up?mode=login');
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-wide">Admin Panel</h1>
          <p className="text-sm text-gray-600">Manage categories and featured content.</p>
        </div>
        <div className="flex items-center gap-3">
          {isAdmin && (
            <button onClick={handleSignOut} className={buttonClass} type="button">
              Sign Out
            </button>
          )}
        </div>
      </div>

      {authError && (
        <div className="border border-red-200 bg-red-50 text-red-700 rounded-lg px-4 py-3 text-sm">
          {authError}
        </div>
      )}

      {checkingUser ? (
        <div className="text-sm text-gray-600">Checking admin access...</div>
      ) : !isAdmin ? (
        <div className="text-sm text-gray-700">Admin access required.</div>
      ) : (
        <>
          <section className="bg-white/80 border border-gray-200 rounded-xl shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
                <p className="text-sm text-gray-600">Create, edit, or remove categories.</p>
              </div>
              <span className="text-sm text-gray-500">{categories.length} items</span>
            </div>

            <form onSubmit={handleCategorySubmit} className="grid gap-3 md:grid-cols-2">
              <input
                className={inputClass}
                placeholder="Name"
                value={categoryForm.name}
                onChange={(e) => setCategoryForm((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
              <input
                className={inputClass}
                placeholder="Slug"
                value={categoryForm.slug}
                onChange={(e) => setCategoryForm((prev) => ({ ...prev, slug: e.target.value }))}
                required
              />
              <div className="flex items-center gap-3">
                <button type="submit" disabled={savingCategory} className={buttonClass}>
                  {savingCategory ? 'Saving...' : categoryButtonLabel}
                </button>
                {categoryForm.id && (
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setCategoryForm({ id: undefined, name: '', slug: '' })}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>

            <div className="space-y-3">
              {loadingData && <p className="text-sm text-gray-500">Loading categories...</p>}
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{category.name}</p>
                    <p className="text-xs text-gray-500">{category.slug}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm text-[#0d4a5f] font-semibold hover:underline"
                      onClick={() =>
                        setCategoryForm({ id: category.id, name: category.name || '', slug: category.slug || '' })
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="text-sm text-red-600 font-semibold hover:underline"
                      onClick={() => handleCategoryDelete(category.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {!categories.length && !loadingData && (
                <p className="text-sm text-gray-500">No categories yet.</p>
              )}
            </div>
          </section>

          <section className="bg-white/80 border border-gray-200 rounded-xl shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Featured</h2>
                <p className="text-sm text-gray-600">Manage featured entries.</p>
              </div>
              <span className="text-sm text-gray-500">{featured.length} items</span>
            </div>

            <form onSubmit={handleFeaturedSubmit} className="grid gap-3 md:grid-cols-3">
              <input
                className={inputClass}
                placeholder="Type"
                value={featuredForm.type}
                onChange={(e) => setFeaturedForm((prev) => ({ ...prev, type: e.target.value }))}
                required
              />
              <input
                className={inputClass}
                placeholder="Reference ID"
                value={featuredForm.refId}
                onChange={(e) => setFeaturedForm((prev) => ({ ...prev, refId: e.target.value }))}
                required
              />
              <input
                className={inputClass}
                placeholder="Order"
                value={featuredForm.order}
                onChange={(e) => setFeaturedForm((prev) => ({ ...prev, order: e.target.value }))}
              />
              <div className="flex items-center gap-3">
                <button type="submit" disabled={savingFeatured} className={buttonClass}>
                  {savingFeatured ? 'Saving...' : featuredButtonLabel}
                </button>
                {featuredForm.id && (
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setFeaturedForm({ id: undefined, type: '', refId: '', order: '' })}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>

            <div className="space-y-3">
              {loadingData && <p className="text-sm text-gray-500">Loading featured items...</p>}
              {featured.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.type}</p>
                    <p className="text-xs text-gray-500">Ref: {item.refId}</p>
                    <p className="text-xs text-gray-500">Order: {item.order ?? 0}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm text-[#0d4a5f] font-semibold hover:underline"
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
                      className="text-sm text-red-600 font-semibold hover:underline"
                      onClick={() => handleFeaturedDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {!featured.length && !loadingData && (
                <p className="text-sm text-gray-500">No featured entries yet.</p>
              )}
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default AdminPanel;
