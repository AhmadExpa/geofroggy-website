'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { FirebaseError } from 'firebase/app';
import Link from 'next/link';
import AuthLayout from './AuthLayout';
import { getFirebaseAuth } from '@/lib/firebaseClient';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

interface LoginFormData {
    email: string;
    password: string;
}

const SignIn = () => {
    const router = useRouter();
    const [authError, setAuthError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

    const verifyAdmin = async () => {
        const authInstance = getFirebaseAuth();
        const currentUser = authInstance?.currentUser;
        if (!currentUser) return { ok: false, error: 'Missing user' };

        const idToken = await currentUser.getIdToken();
        const res = await fetch('/api/admin/auth/verify', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
            credentials: 'include',
        });
        const payload = await res.json().catch(() => null);

        if (!res.ok || !payload?.ok || !payload.admin) {
            return { ok: false, error: payload?.error || 'Access restricted to admins.' };
        }

        return { ok: true };
    };

    const onSubmit = async (data: LoginFormData) => {
        setAuthError(null);
        setLoading(true);
        try {
            const authInstance = getFirebaseAuth();
            if (!authInstance) {
                setAuthError('Auth not initialized. Please check environment settings.');
                return;
            }

            await signInWithEmailAndPassword(authInstance, data.email, data.password);
            const verification = await verifyAdmin();
            if (!verification.ok) {
                await signOut(authInstance);
                setAuthError(verification.error || 'Access restricted to admins.');
                return;
            }
            router.push('/admin');
        } catch (error) {
            if (error instanceof FirebaseError) {
                setAuthError(error.message);
            } else if (error instanceof Error) {
                setAuthError(error.message);
            } else {
                setAuthError('Unable to process your request right now.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        console.log('Google login');
    };

    const handleAppleLogin = () => {
        console.log('Apple login');
    };

    return (
        <AuthLayout imageSrc="/images/authImg.png">
            <div className=" p-8 lg:p-10 space-y-5">

                {/* Header */}
                <div className="text-center space-y-3">
                    <div className="flex justify-center mb-3">
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">WELCOME</h1>
                    <p className="text-gray-500 text-sm">Login with Gmail</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 pt-2">

                    {/* Email */}
                    <div>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="test"
                                {...register('email', { required: 'Email is required' })}
                                className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4a5f] focus:border-transparent text-sm"
                            />
                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="••••••••••"
                                {...register('password', { required: 'Password is required' })}
                                className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4a5f] focus:border-transparent text-sm"
                            />
                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                        </div>
                        {errors.password && <p className="mt-1.5 text-xs text-red-500">{errors.password.message}</p>}
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <Link href="/contact" className="text-xs text-gray-500 hover:text-[#0d4a5f] transition">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-[#0d4a5f] text-white font-semibold rounded-lg hover:bg-[#0a3a4d] transition-colors shadow-md text-sm disabled:opacity-80"
                    >
                        {loading ? 'Please wait...' : 'Login'}
                    </button>
                    {authError && <p className="text-center text-sm text-red-500">{authError}</p>}
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 py-2">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="text-gray-400 font-medium text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={handleGoogleLogin}
                        className="py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                    </button>

                    <button
                        onClick={handleAppleLogin}
                        className="py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                    </button>
                </div>

                {/* Register Link */}
                <div className="text-center text-gray-600 text-sm pt-1">
                    Don&apos;t Have an Account?{' '}
                    <Link href="/sign-up" className="text-[#a3e635] font-semibold hover:underline">
                        Register Now
                    </Link>
                </div>

                {/* Go Back Button */}
                <button
                    onClick={() => window.location.href = '/'}
                    className="w-full py-3 bg-[#0d4a5f] text-white font-medium rounded-lg hover:bg-[#0a3a4d] transition-colors text-sm"
                >
                    Go Back To Home
                </button>
            </div>
        </AuthLayout>
    );
}

export default SignIn;
