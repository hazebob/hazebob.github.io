'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [bgImage, setBgImage] = useState(1);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    setBgImage(randomNum);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header bgImage={bgImage} />
      <main className="flex-1">
        {children}
      </main>
      <Footer bgImage={bgImage} />
    </div>
  );
} 
