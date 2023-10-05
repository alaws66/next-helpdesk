import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

import { ReactNode } from 'react';
import { cookies } from 'next/headers';

// components
import Navbar from '../components/Navbar';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <>
      {data.session ? <Navbar user={data.session.user} /> : <nav></nav>}
      {children}
    </>
  );
}