import { Timestamp } from 'firebase-admin/firestore';
import { NextResponse, type NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { adminDb } from '@/lib/firebaseAdmin';
import { serializeDoc } from '@/lib/firestoreUtils';

export const runtime = 'nodejs';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
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
  const hasOrder = typeof body.order !== 'undefined';
  const orderValue =
    typeof body.order === 'number' && Number.isFinite(body.order) ? body.order : Number(body.order);

  if (!type && !refId && !hasOrder) {
    return NextResponse.json({ ok: false, error: 'Nothing to update' }, { status: 400 });
  }

  try {
    const docRef = adminDb.collection('featured').doc(id);
    const snapshot = await docRef.get();

    if (!snapshot.exists) {
      return NextResponse.json({ ok: false, error: 'Featured item not found' }, { status: 404 });
    }

    const update: Record<string, unknown> = { updatedAt: Timestamp.now() };
    if (type) update.type = type;
    if (refId) update.refId = refId;
    if (hasOrder && Number.isFinite(orderValue)) {
      update.order = orderValue;
    }

    await docRef.update(update);
    const updated = await docRef.get();

    return NextResponse.json({ ok: true, data: serializeDoc(updated) });
  } catch (error) {
    console.error('Error updating featured item', error);
    return NextResponse.json({ ok: false, error: 'Failed to update featured item' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const auth = await requireAdmin(request);
  if ('response' in auth) return auth.response;

  try {
    await adminDb.collection('featured').doc(id).delete();
    return NextResponse.json({ ok: true, data: { id } });
  } catch (error) {
    console.error('Error deleting featured item', error);
    return NextResponse.json({ ok: false, error: 'Failed to delete featured item' }, { status: 500 });
  }
}
