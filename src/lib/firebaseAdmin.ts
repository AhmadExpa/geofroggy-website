import { getApps, initializeApp, cert } from 'firebase-admin/app';
import type { ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

type RawServiceAccount = ServiceAccount & {
  project_id?: string;
  client_email?: string;
  private_key?: string;
};

function loadServiceAccount(): ServiceAccount {
  const base64 = process.env.FIREBASE_SERVICE_ACCOUNT_JSON_BASE64;
  const json = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

  const payload = base64
    ? Buffer.from(base64, 'base64').toString('utf-8')
    : json;

  if (!payload) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_JSON(_BASE64) is not set');
  }

  let parsed: RawServiceAccount;
  try {
    parsed = JSON.parse(payload) as RawServiceAccount;
  } catch {
    throw new Error('Unable to parse Firebase service account JSON');
  }

  const projectId = parsed.projectId ?? parsed.project_id;
  const clientEmail = parsed.clientEmail ?? parsed.client_email;
  const privateKey =
    parsed.privateKey ?? parsed.private_key?.replace(/\\n/g, '\n');

  if (!privateKey || !clientEmail) {
    throw new Error(
      'Firebase service account JSON missing private key or client email',
    );
  }

  return {
    projectId,
    clientEmail,
    privateKey,
  };
}

function initAdminApp() {
  const existingApp = getApps()[0];
  if (existingApp) return existingApp;

  const serviceAccount = loadServiceAccount();

  return initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.projectId,
  });
}

const adminApp = initAdminApp();

export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);
export { adminApp };
