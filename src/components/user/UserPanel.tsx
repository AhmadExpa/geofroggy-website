'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getFirebaseAuth } from '@/lib/firebaseClient';
import { signOut as firebaseSignOut } from 'firebase/auth';

const UserPanel = () => {
    const { user, role, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && (!user || role !== 'user')) {
            // If user is admin, they should go to admin panel, if not logged in, go to login
            if (role === 'admin') {
                router.replace('/admin');
            } else if (!user) {
                router.replace('/sign-up?mode=login');
            }
        }
    }, [user, role, loading, router]);

    const handleSignOut = async () => {
        const auth = getFirebaseAuth();
        if (auth) {
            await firebaseSignOut(auth);
        }
        await fetch('/api/admin/auth/verify', { method: 'DELETE' }); // Clear cookies
        router.push('/sign-up?mode=login');
    };

    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#175883]"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="bg-[#175883] px-6 py-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-white">User Dashboard</h1>
                        <button
                            onClick={handleSignOut}
                            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md text-sm font-medium transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        <div className="border-b border-gray-200 pb-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome back!</h2>
                            <p className="text-gray-600">
                                Hello, <span className="font-semibold">{user.displayName || user.email}</span>. Welcome to your user panel.
                            </p>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-[#175883] p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-[#175883]" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-blue-700">
                                        This is your personal dashboard. More features will be available here soon.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Account Details</h3>
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Member since</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPanel;
