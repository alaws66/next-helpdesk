import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const ticket = await request.json();

  // get supabase instance
  const supabase = createRouteHandlerClient({ cookies });

  // get the current user session
  const { data: { session } } = await supabase.auth.getSession();

  // insert the data
  const { data, error } = await supabase.from('Tickets')
    .insert({
      ...ticket,
      user_email: session?.user.email
    })
    .select()
    .single()

  return NextResponse.json({ data, error });
}