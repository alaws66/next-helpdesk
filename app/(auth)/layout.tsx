import Link from 'next/link';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <nav>
        <h1>Helpdesk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
      </nav>
      {children}
    </>
  );
}