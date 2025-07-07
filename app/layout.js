// app/layout.tsx
import Header from '@/components/Header';
import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Madasha Saab',
  description: 'Voices That Inspire. Dialogue That Transforms.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body">
        <Header/>
        {children}</body>
        <Footer/>
    </html>
  );
}
