import type { Query } from 'firebase-admin/firestore';
import { NextResponse, type NextRequest } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import { serializeDoc } from '@/lib/firestoreUtils';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const typeFilter = searchParams.get('type');
  const limitParam = searchParams.get('limit');
  const parsedLimit = limitParam ? Number.parseInt(limitParam, 10) : undefined;
  const limit = parsedLimit && parsedLimit > 0 ? Math.min(parsedLimit, 50) : undefined;

  try {
    let query: Query = adminDb.collection('featured').orderBy('order', 'asc');
    if (typeFilter) {
      query = query.where('type', '==', typeFilter);
    }
    if (limit) {
      query = query.limit(limit);
    }

    const snapshot = await query.get();
    const items = snapshot.docs.map((doc) => serializeDoc(doc));

    return NextResponse.json({ ok: true, data: items });
  } catch (error) {
    console.error('Error fetching featured', error);
    return NextResponse.json({ ok: false, error: 'Failed to load featured content' }, { status: 500 });
  }
}
