import type { FirebaseApp } from 'firebase/app';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

let cachedApp: FirebaseApp | null = null;

function buildConfig() {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  const missing = Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length && typeof window !== 'undefined') {
    console.error(`Missing Firebase client env vars: ${missing.join(', ')}`);
    return null;
  }

  return config as {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
}

export function getFirebaseApp(): FirebaseApp | null {
  if (cachedApp) return cachedApp;
  if (typeof window === 'undefined') return null;

  const config = buildConfig();
  if (!config) return null;

  cachedApp = getApps().length ? getApp() : initializeApp(config);
  return cachedApp;
}

export function getFirebaseAuth() {
  const app = getFirebaseApp();
  if (!app) return null;
  return getAuth(app);
}

export function getFirebaseDb() {
  const app = getFirebaseApp();
  if (!app) return null;
  return getFirestore(app);
}

export const firebaseApp = getFirebaseApp();
export const auth = getFirebaseAuth();
export const clientDb = getFirebaseDb();
