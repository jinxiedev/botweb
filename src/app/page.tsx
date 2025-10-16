'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
    </>
  );
}




