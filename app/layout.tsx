import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

// components
import Navbar from './components/Navbar';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Helpdesk',
  description: 'Generated by Aimee Laws',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
