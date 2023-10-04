import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}