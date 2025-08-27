import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    // TODO: Integrate with email/support pipeline if needed.
    return NextResponse.json({ success: true, message: 'Message received', received: body }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 400 });
  }
}
