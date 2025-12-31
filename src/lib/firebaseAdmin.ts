import { getApps, initializeApp, cert } from 'firebase-admin/app';
import type { ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

function loadServiceAccount(): ServiceAccount {
  const base64 = process.env.FIREBASE_SERVICE_ACCOUNT_JSON_BASE64;
  const json = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

  const payload = base64
    ? Buffer.from(base64, 'base64').toString('utf-8')
    : json;

  if (!payload) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_JSON(_BASE64) is not set');
  }

  try {
    return JSON.parse(payload) as ServiceAccount;
  } catch {
    throw new Error('Unable to parse Firebase service account JSON');
  }
}

function initAdminApp() {
  const existingApp = getApps()[0];
  if (existingApp) return existingApp;

  const serviceAccount = loadServiceAccount();

  return initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });
}

const adminApp = initAdminApp();

export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);
export { adminApp };
