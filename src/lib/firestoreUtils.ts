import { Timestamp } from 'firebase-admin/firestore';

export function timestampToIso(value: unknown) {
  if (value instanceof Timestamp) {
    return value.toDate().toISOString();
  }
  return value ?? null;
}

export function serializeDoc(
  doc: FirebaseFirestore.DocumentSnapshot | FirebaseFirestore.QueryDocumentSnapshot,
) {
  const raw = (doc.data() || {}) as Record<string, unknown>;
  const serialized: Record<string, unknown> = { ...raw };

  ['createdAt', 'updatedAt', 'publishedAt'].forEach((field) => {
    serialized[field] = timestampToIso(raw[field]);
  });

  return {
    id: doc.id,
    ...serialized,
  };
}
