'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { getFirebaseAuth } from '@/lib/firebaseClient';
import { useRouter } from 'next/navigation';
import { PanelLeft, LogOut } from 'lucide-react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    const { user, role } = useAuth();
    const router = useRouter();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    const handleSignOut = async () => {
        const auth = getFirebaseAuth();
        if (auth) {
            await firebaseSignOut(auth);
        }
        await fetch('/api/admin/auth/verify', { method: 'DELETE' });
        router.push('/sign-up?mode=login');
    };

    const navItems = [
        {
            name: 'Dashboard', href: '/admin', icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            )
        },
        {
            name: 'Categories', href: '/admin/categories', icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 011 12V7a4 4 0 014-4z" />
                </svg>
            )
        },
        {
            name: 'Features', href: '/admin/features', icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            name: 'Posts', href: '/admin/posts', icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            )
        },
    ];

    if (!user || role !== 'admin') {
        // Optionally handle loading or redirect state here if not handled by page guard
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            {/* Top Navbar for Mobile */}
            <header className="md:hidden bg-[#175883] text-white p-4 flex justify-between items-center z-30 sticky top-0 shadow-md">
                <span className="font-bold text-lg">Admin Panel</span>
                <div className="flex items-center gap-4">
                    <button className="text-sm bg-white/10 px-3 py-1.5 rounded hover:bg-white/20 transition hidden sm:block">
                        {user.displayName || 'Admin'}
                    </button>
                    <button
                        onClick={handleSignOut}
                        className="p-1 focus:outline-none hover:bg-white/10 rounded transition-colors text-white"
                        title="Sign Out"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                    <button onClick={toggleSidebar} className="p-1 focus:outline-none hover:bg-white/10 rounded transition-colors">
                        <PanelLeft className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Sidebar (Desktop & Mobile Drawer) */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#175883] text-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-6 border-b border-[#1e6a9a] flex justify-between items-center">
                    <h1 className="text-2xl font-bold tracking-wide">
                        GEOFROGGY
                        <span className="block text-xs font-normal opacity-70 mt-1">Admin Dashboard</span>
                    </h1>
                    {/* Close button for mobile */}
                    <button onClick={closeSidebar} className="md:hidden text-white/70 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>



                <nav className="mt-6 px-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href; // Exact match for simplicity, or use startsWith for sub-routes
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeSidebar}
                                className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 group ${isActive
                                    ? 'bg-[#8DC63F] text-white shadow-md'
                                    : 'text-gray-100 hover:bg-[#1e6a9a] hover:text-white'
                                    }`}
                            >
                                {item.icon}
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto p-4 border-t border-[#1e6a9a] bg-[#124669]/50">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3 overflow-hidden">
                            <div className="w-8 h-8 rounded-full bg-[#8DC63F] flex items-center justify-center text-xs font-bold shrink-0">
                                {user.email?.[0].toUpperCase()}
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-medium truncate">{user.displayName || 'Admin'}</p>
                                <p className="text-xs text-gray-300 truncate opacity-75">{user.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                            title="Sign Out"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>


            </aside>

            {/* Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
