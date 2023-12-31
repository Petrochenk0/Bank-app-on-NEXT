import LeftSideBar from '@/components/LeftSideBar/LeftSideBar';
import Header from '../components/Header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RightSideBar } from '@/components/RightSideBar/RightSideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brypto bank',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <LeftSideBar />
        <RightSideBar />
        {children}
      </body>
    </html>
  );
}
