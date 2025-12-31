import { Timestamp } from 'firebase-admin/firestore';
import { NextResponse, type NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { adminDb } from '@/lib/firebaseAdmin';
import { serializeDoc } from '@/lib/firestoreUtils';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const auth = await requireAdmin(request);
  if ('response' in auth) return auth.response;

  let body: { name?: string; slug?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const name = body.name?.trim();
  const slug = body.slug?.trim();

  if (!name || !slug) {
    return NextResponse.json({ ok: false, error: 'name and slug are required' }, { status: 400 });
  }

  try {
    const existingSlug = await adminDb.collection('categories').where('slug', '==', slug).limit(1).get();
    if (!existingSlug.empty) {
      return NextResponse.json({ ok: false, error: 'Slug already exists' }, { status: 409 });
    }

    const now = Timestamp.now();
    const docRef = await adminDb.collection('categories').add({
      name,
      slug,
      createdAt: now,
      updatedAt: now,
    });

    const created = await docRef.get();

    return NextResponse.json({ ok: true, data: serializeDoc(created) });
  } catch (error) {
    console.error('Error creating category', error);
    return NextResponse.json({ ok: false, error: 'Failed to create category' }, { status: 500 });
  }
}
