import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// components
import Navbar from '../components/Navbar';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect('/login');
  }

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
}