import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function POST(request: NextResponse) {
  // fetch process
  const convenience = request.url.split('/')[4];
  const hottrendId = request.url.split('/')[5];

  redirect(`/hottrend/${convenience}/${hottrendId}`);
}
