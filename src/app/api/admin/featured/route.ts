import { Timestamp } from 'firebase-admin/firestore';
import { NextResponse, type NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { adminDb } from '@/lib/firebaseAdmin';
import { serializeDoc } from '@/lib/firestoreUtils';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const auth = await requireAdmin(request);
  if ('response' in auth) return auth.response;

  let body: { type?: string; refId?: string; order?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const type = body.type?.trim();
  const refId = body.refId?.trim();
  const orderValue = Number.isFinite(body.order) ? Number(body.order) : 0;

  if (!type || !refId) {
    return NextResponse.json({ ok: false, error: 'type and refId are required' }, { status: 400 });
  }

  try {
    const now = Timestamp.now();
    const docRef = await adminDb.collection('featured').add({
      type,
      refId,
      order: orderValue,
      createdAt: now,
      updatedAt: now,
    });

    const created = await docRef.get();

    return NextResponse.json({ ok: true, data: serializeDoc(created) });
  } catch (error) {
    console.error('Error creating featured item', error);
    return NextResponse.json({ ok: false, error: 'Failed to create featured item' }, { status: 500 });
  }
}
