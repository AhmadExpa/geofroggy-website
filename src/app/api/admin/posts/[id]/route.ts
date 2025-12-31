import { NextResponse, type NextRequest } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import { requireAdmin } from '@/lib/adminAuth';
import { Timestamp } from 'firebase-admin/firestore';

export const runtime = 'nodejs';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { response: errorResponse } = await requireAdmin(request);
  if (errorResponse) return errorResponse;

  const { id } = await params;
  if (!id) {
     return NextResponse.json({ ok: false, error: 'Missing ID' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { title, slug, categoryId, content, featured } = body;

    const docRef = adminDb.collection('posts').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return NextResponse.json({ ok: false, error: 'Post not found' }, { status: 404 });
    }

    const updates: Record<string, any> = {
        updatedAt: Timestamp.now(),
    };

    if (title !== undefined) updates.title = title;
    if (slug !== undefined) updates.slug = slug;
    if (categoryId !== undefined) updates.categoryId = categoryId;
    if (content !== undefined) updates.content = content;
    if (featured !== undefined) updates.featured = !!featured;

    await docRef.update(updates);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ ok: false, error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { response: errorResponse } = await requireAdmin(request);
  if (errorResponse) return errorResponse;

  const { id } = await params;
  if (!id) {
     return NextResponse.json({ ok: false, error: 'Missing ID' }, { status: 400 });
  }

  try {
    await adminDb.collection('posts').doc(id).delete();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ ok: false, error: 'Failed to delete post' }, { status: 500 });
  }
}
