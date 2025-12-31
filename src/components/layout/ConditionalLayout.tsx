'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthProvider } from '@/context/AuthContext';
import { ToastProvider } from '@/context/ToastContext';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const authPaths = ['/sign-in', '/sign-up'];
  const isAuthPage = pathname ? authPaths.includes(pathname) : false;

  return (
    <AuthProvider>
      <ToastProvider>
        {!isAuthPage && <Navbar />}
        {children}
        {!isAuthPage && <Footer />}
      </ToastProvider>
    </AuthProvider>
  );
}
