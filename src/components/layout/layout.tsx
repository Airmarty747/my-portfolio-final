import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Engineering & Program Management',
  description: 'Mechanical Engineering, Embedded Systems, and Program Management Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Nathan Martinson. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}