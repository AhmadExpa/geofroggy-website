import type { DecodedIdToken } from 'firebase-admin/auth';
import { NextResponse, type NextRequest } from 'next/server';
import { adminAuth } from './firebaseAdmin';

export function getAdminEmails(): string[] {
  return (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  return getAdminEmails().includes(email.trim().toLowerCase());
}

export async function verifyIdToken(token: string): Promise<DecodedIdToken> {
  return adminAuth.verifyIdToken(token);
}

export async function verifyAdminToken(token?: string | null) {
  if (!token) return { ok: false as const, error: 'Missing token' };

  try {
    const decoded = await verifyIdToken(token);
    const role = isAdminEmail(decoded.email) ? 'admin' : 'user';
    
    // We strictly enforce admin for specific checks, but this function now identifies the role
    return { ok: true as const, decoded, role };
  } catch (error) {
    console.error('Token verification failed:', error);
    return { ok: false as const, error: 'Invalid token', details: error };
  }
}

export function getBearerToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization') || '';
  if (!authHeader.toLowerCase().startsWith('bearer ')) return null;
  return authHeader.slice(7).trim();
}

export async function requireAdmin(request: NextRequest) {
  const bearer = getBearerToken(request);
  const cookieToken = request.cookies.get('admin_token')?.value || null;
  const token = bearer || cookieToken;

  if (!token) {
    return {
      response: NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 }),
    };
  }

  const result = await verifyAdminToken(token);
  if (!result.ok || !result.decoded) {
    const status = result.error === 'Forbidden' ? 403 : 401;
    return {
      response: NextResponse.json({ ok: false, error: result.error }, { status }),
    };
  }

  return { token, decoded: result.decoded };
}
