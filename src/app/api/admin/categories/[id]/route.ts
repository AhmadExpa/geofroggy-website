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

  let body: { name?: string; slug?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const name = body.name?.trim();
  const slug = body.slug?.trim();

  if (!name && !slug) {
    return NextResponse.json({ ok: false, error: 'Nothing to update' }, { status: 400 });
  }

  try {
    const docRef = adminDb.collection('categories').doc(id);
    const snapshot = await docRef.get();

    if (!snapshot.exists) {
      return NextResponse.json({ ok: false, error: 'Category not found' }, { status: 404 });
    }

    if (slug && slug !== snapshot.get('slug')) {
      const duplicate = await adminDb.collection('categories').where('slug', '==', slug).limit(1).get();
      if (!duplicate.empty) {
        return NextResponse.json({ ok: false, error: 'Slug already exists' }, { status: 409 });
      }
    }

    const update: Record<string, unknown> = {
      updatedAt: Timestamp.now(),
    };

    if (name) update.name = name;
    if (slug) update.slug = slug;

    await docRef.update(update);
    const updated = await docRef.get();

    return NextResponse.json({ ok: true, data: serializeDoc(updated) });
  } catch (error) {
    console.error('Error updating category', error);
    return NextResponse.json({ ok: false, error: 'Failed to update category' }, { status: 500 });
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
    const postsQuery = adminDb.collection('posts').where('categoryId', '==', id).limit(1);
    const existingPosts = await postsQuery.get();
    const postCount = existingPosts.size;

    if (postCount > 0) {
      return NextResponse.json(
        { ok: false, error: 'Category in use', details: { postCount } },
        { status: 409 },
      );
    }

    await adminDb.collection('categories').doc(id).delete();
    return NextResponse.json({ ok: true, data: { id } });
  } catch (error) {
    console.error('Error deleting category', error);
    return NextResponse.json({ ok: false, error: 'Failed to delete category' }, { status: 500 });
  }
}
