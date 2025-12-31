import type { Query } from 'firebase-admin/firestore';
import { NextResponse, type NextRequest } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import { serializeDoc } from '@/lib/firestoreUtils';

export const runtime = 'nodejs';

async function resolveCategoryId(categoryParam: string) {
  const categoriesRef = adminDb.collection('categories');

  const byId = await categoriesRef.doc(categoryParam).get();
  if (byId.exists) return byId.id;

  const bySlug = await categoriesRef.where('slug', '==', categoryParam).limit(1).get();
  if (!bySlug.empty) return bySlug.docs[0].id;

  return null;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const categoryParam = searchParams.get('category');
  const featuredParam = searchParams.get('featured');
  const limitParam = searchParams.get('limit');
  const cursor = searchParams.get('cursor');

  const parsedLimit = limitParam ? Number.parseInt(limitParam, 10) : 20;
  const limit = Number.isFinite(parsedLimit) && parsedLimit > 0 ? Math.min(parsedLimit, 50) : 20;

  try {
    let categoryId: string | null = null;

    if (categoryParam) {
      categoryId = await resolveCategoryId(categoryParam);
      if (!categoryId) {
        return NextResponse.json({ ok: false, error: 'Category not found' }, { status: 404 });
      }
    }

    let query: Query = adminDb.collection('posts').orderBy('createdAt', 'desc');

    if (categoryId) {
      query = query.where('categoryId', '==', categoryId);
    }

    if (featuredParam !== null) {
      const featuredFlag = featuredParam === 'true';
      query = query.where('featured', '==', featuredFlag);
    }

    if (cursor) {
      const cursorDoc = await adminDb.collection('posts').doc(cursor).get();
      if (!cursorDoc.exists) {
        return NextResponse.json({ ok: false, error: 'Invalid cursor' }, { status: 400 });
      }
      query = query.startAfter(cursorDoc);
    }

    query = query.limit(limit);

    const snapshot = await query.get();
    const items = snapshot.docs.map((doc) => serializeDoc(doc));
    const nextCursor =
      snapshot.size === limit && snapshot.docs.length
        ? snapshot.docs[snapshot.docs.length - 1].id
        : null;

    return NextResponse.json({ ok: true, data: { items, nextCursor } });
  } catch (error) {
    console.error('Error fetching posts', error);
    return NextResponse.json({ ok: false, error: 'Failed to load posts' }, { status: 500 });
  }
}
