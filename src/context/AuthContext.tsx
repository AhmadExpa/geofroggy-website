'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { getFirebaseAuth } from '@/lib/firebaseClient';

type UserRole = 'admin' | 'user' | null;

interface AuthContextType {
    user: User | null;
    role: UserRole;
    loading: boolean;
    refreshRole: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    role: null,
    loading: true,
    refreshRole: async () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [role, setRole] = useState<UserRole>(null);
    const [loading, setLoading] = useState(true);

    const fetchRole = async (currentUser: User | null) => {
        if (!currentUser) {
            setRole(null);
            return;
        }

        try {
            const idToken = await currentUser.getIdToken();
            const res = await fetch('/api/admin/auth/verify', {
                method: 'POST',
                headers: { Authorization: `Bearer ${idToken}` },
            });
            const data = await res.json();
            if (data.ok && data.role) {
                setRole(data.role);
            } else {
                setRole('user'); // Default to user if verification fails specifically for admin but auth is valid
            }
        } catch (err) {
            console.error('Error fetching role:', err);
            setRole('user');
        }
    };

    useEffect(() => {
        const auth = getFirebaseAuth();
        if (!auth) {
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                await fetchRole(currentUser);
            } else {
                setRole(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, role, loading, refreshRole: async () => user && fetchRole(user) }}>
            {children}
        </AuthContext.Provider>
    );
};
