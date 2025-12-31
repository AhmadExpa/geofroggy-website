import type { Query } from 'firebase-admin/firestore';
import { NextResponse, type NextRequest } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import { serializeDoc } from '@/lib/firestoreUtils';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const limitParam = searchParams.get('limit');
  const parsedLimit = limitParam ? Number.parseInt(limitParam, 10) : undefined;
  const limit = parsedLimit && parsedLimit > 0 ? Math.min(parsedLimit, 50) : undefined;

  try {
    let query: Query = adminDb.collection('publicUsers').orderBy('createdAt', 'desc');
    if (limit) {
      query = query.limit(limit);
    }

    const snapshot = await query.get();
    const users = snapshot.docs.map((doc) => serializeDoc(doc));

    return NextResponse.json({ ok: true, data: users });
  } catch (error) {
    console.error('Error fetching public users', error);
    return NextResponse.json({ ok: false, error: 'Failed to load users' }, { status: 500 });
  }
}
