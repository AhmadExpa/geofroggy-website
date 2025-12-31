import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyAdminToken } from '@/lib/adminAuth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const token = (await cookies()).get('admin_token')?.value;
  const verification = await verifyAdminToken(token);

  if (!verification.ok || verification.role !== 'admin') {
    // If validation fails or role is not admin (e.g. user trying to access), redirect
    redirect('/sign-up?mode=login');
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Geofroggy Admin Panel.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <a href="/admin/categories" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Categories</h3>
          <p className="text-sm text-gray-500">Manage content categories.</p>
        </a>
        <a href="/admin/features" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Featured Content</h3>
          <p className="text-sm text-gray-500">Manage home page highlights.</p>
        </a>
        <a href="/admin/posts" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Posts</h3>
          <p className="text-sm text-gray-500">Create and edit articles.</p>
        </a>
      </div>
    </div>
  );
}
