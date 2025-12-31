import { NextResponse, type NextRequest } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import { requireAdmin } from '@/lib/adminAuth';
import { serializeDoc } from '@/lib/firestoreUtils';
import { Timestamp } from 'firebase-admin/firestore';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const { response: errorResponse } = await requireAdmin(request);
  if (errorResponse) return errorResponse;

  try {
    const snapshot = await adminDb.collection('posts').orderBy('createdAt', 'desc').get();
    const items = snapshot.docs.map((doc) => serializeDoc(doc));
    
    // We can add cursor-based pagination here if needed, but for admin lists we often want full list or simplified paging.
    // Following existing pattern of returning { ok: true, data: { items } }

    return NextResponse.json({ ok: true, data: { items } });
  } catch (error) {
    console.error('Error fetching admin posts:', error);
    return NextResponse.json({ ok: false, error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { response: errorResponse } = await requireAdmin(request);
  if (errorResponse) return errorResponse;

  try {
    const body = await request.json();
    const { title, slug, categoryId, content, featured } = body;

    // Simple validation
    if (!title || !slug || !categoryId) {
        return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const docRef = adminDb.collection('posts').doc();
    const now = Timestamp.now();
    
    const newPost = {
        title,
        slug,
        categoryId,
        content: content || '',
        featured: !!featured,
        createdAt: now,
        updatedAt: now,
    };

    await docRef.set(newPost);
    
    return NextResponse.json({ ok: true, data: { id: docRef.id, ...newPost } });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ ok: false, error: 'Failed to create post' }, { status: 500 });
  }
}
