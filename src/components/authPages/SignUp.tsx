'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { FirebaseError } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import AuthLayout from './AuthLayout';
import { getFirebaseAuth } from '@/lib/firebaseClient';
import { useToast } from '@/context/ToastContext';

interface SignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp = ({ initialMode = 'signup' }: { initialMode?: 'signup' | 'login' }) => {
    const router = useRouter();
    const [mode, setMode] = useState<'signup' | 'login'>(initialMode);
    const [authError, setAuthError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<SignupFormData>({
        shouldUnregister: true,
    });
    const password = watch('password');

    useEffect(() => {
        setMode(initialMode);
    }, [initialMode]);

    const { showToast } = useToast();

    // ... (rest of hook calls)

    const handleSessionCheck = async () => {
        const auth = getFirebaseAuth();
        const currentUser = auth?.currentUser;
        if (!currentUser) return { ok: false, error: 'Missing user' };

        const idToken = await currentUser.getIdToken();
        const verifyRes = await fetch('/api/admin/auth/verify', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
            credentials: 'include',
        });

        const payload = await verifyRes.json().catch(() => null);
        if (!verifyRes.ok || !payload?.ok) {
            return { ok: false, error: payload?.error || 'Access denied' };
        }

        return { ok: true, role: payload.role };
    };

    const onSubmit = async (data: SignupFormData) => {
        setAuthError(null);
        setLoading(true);

        try {
            const auth = getFirebaseAuth();
            if (!auth) {
                setAuthError('Auth not initialized. Please check environment settings.');
                return;
            }

            if (mode === 'signup') {
                const credential = await createUserWithEmailAndPassword(auth, data.email, data.password);
                if (data.name) {
                    await updateProfile(credential.user, { displayName: data.name });
                }
            } else {
                await signInWithEmailAndPassword(auth, data.email, data.password);
            }

            const sessionResult = await handleSessionCheck();
            if (!sessionResult.ok) {
                const authInstance = getFirebaseAuth();
                if (authInstance) {
                    await signOut(authInstance);
                }
                setAuthError(sessionResult.error || 'Authentication failed.');
                return;
            }

            showToast('Login successful', 'success');

            // Redirect based on role
            if (sessionResult.role === 'admin') {
                router.push('/admin');
            } else {
                router.push('/user');
            }

            reset();
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

    const toggleMode = () => {
        setAuthError(null);
        setMode((prev) => (prev === 'signup' ? 'login' : 'signup'));
        reset();
    };

    return (
        <AuthLayout imageSrc="/images/authImg.png">
            <div className=" p-8 lg:p-10 space-y-5">

                {/* Header */}
                <div className="text-center space-y-3">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">WELCOME</h1>
                    <p className="text-gray-500 text-sm">Register Your Idea</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">

                    {mode === 'signup' && (
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="test"
                                    {...register('name', { required: 'Name is required' })}
                                    className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4a5f] focus:border-transparent text-sm"
                                />
                                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                            {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
                        </div>
                    )}

                    {/* Email */}
                    <div>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
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
                                placeholder="Password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    }
                                })}
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

                    {mode === 'signup' && (
                        <div>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    {...register('confirmPassword', {
                                        required: 'Please confirm your password',
                                        validate: value => value === password || 'Passwords do not match'
                                    })}
                                    className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d4a5f] focus:border-transparent text-sm"
                                />
                                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                            {errors.confirmPassword && <p className="mt-1.5 text-xs text-red-500">{errors.confirmPassword.message}</p>}
                        </div>
                    )}

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-[#0d4a5f] text-white font-semibold rounded-lg hover:bg-[#0a3a4d] transition-colors shadow-md text-sm mt-2 disabled:opacity-80"
                    >
                        {loading ? 'Please wait...' : mode === 'signup' ? 'Register' : 'Login'}
                    </button>
                    {authError && <p className="text-center text-sm text-red-500">{authError}</p>}
                </form>

                {/* Login Link */}
                <div className="text-center text-gray-600 text-sm pt-2">
                    {mode === 'signup' ? 'Already Have an Account? ' : "Don't Have an Account? "}
                    <button type="button" onClick={toggleMode} className="text-[#a3e635] font-semibold hover:underline">
                        {mode === 'signup' ? 'Login Now' : 'Register Now'}
                    </button>
                </div>

                {/* Go Back Button */}
                <button
                    onClick={() => window.location.href = '/'}
                    className="w-full py-3 bg-[#0d4a5f] text-white font-medium rounded-lg hover:bg-[#0a3a4d] transition-colors text-sm"
                >
                    Go Back To Home
                </button>
            </div>
        </AuthLayout >
    );
}

export default SignUp;
