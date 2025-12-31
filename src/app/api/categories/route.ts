import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import { serializeDoc } from '@/lib/firestoreUtils';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const snapshot = await adminDb
      .collection('categories')
      .orderBy('createdAt', 'desc')
      .get();

    const categories = snapshot.docs.map((doc) => serializeDoc(doc));

    return NextResponse.json({ ok: true, data: categories });
  } catch (error) {
    console.error('Error fetching categories', error);
    return NextResponse.json({ ok: false, error: 'Failed to load categories' }, { status: 500 });
  }
}
