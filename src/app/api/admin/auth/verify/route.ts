import { NextResponse, type NextRequest } from 'next/server';
import { getBearerToken, verifyAdminToken } from '@/lib/adminAuth';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const token = getBearerToken(request) || request.cookies.get('admin_token')?.value || null;

  if (!token) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const verification = await verifyAdminToken(token);

  if (!verification.ok || !verification.decoded) {
    const secure = process.env.NODE_ENV === 'production';
    const response = NextResponse.json(
      { ok: false, error: 'Forbidden' },
      { status: verification.error === 'Invalid token' ? 401 : 403 },
    );
    response.cookies.set('admin_token', '', {
      path: '/',
      maxAge: 0,
      httpOnly: true,
      sameSite: 'lax',
      secure,
    });
    return response;
  }

  const secure = process.env.NODE_ENV === 'production';
  const role = verification.role || 'user';

  const response = NextResponse.json({
    ok: true,
    admin: role === 'admin',
    role: role,
    email: verification.decoded.email,
  });
  
  // Set cookie for both admins and users to maintain session
  response.cookies.set('admin_token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure,
    path: '/',
    maxAge: 60 * 60 * 24 * 5, // 5 days
  });

  return response;
}

export async function DELETE() {
  const secure = process.env.NODE_ENV === 'production';
  const response = NextResponse.json({ ok: true });
  response.cookies.set('admin_token', '', {
    path: '/',
    maxAge: 0,
    httpOnly: true,
    sameSite: 'lax',
    secure,
  });
  return response;
}
