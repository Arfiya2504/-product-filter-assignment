'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="E-commerce product showcase"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="-z-10"
        data-ai-hint="e-commerce products"
        priority // Preload the background image for LCP
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 -z-10" />
      
      <main className="z-0 p-8 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-down">
          Welcome to <span className="text-primary">ProductVerse</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-neutral-200 max-w-2xl animate-fade-in-up animation-delay-300">
          Discover a curated collection of amazing products. Your next favorite item is just a click away!
        </p>
        <Link href="/products" passHref>
          <Button 
            size="lg" 
            className="px-12 py-7 text-xl rounded-lg shadow-xl bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-primary/50 animate-fade-in-up animation-delay-600"
          >
            Get Started
          </Button>
        </Link>
      </main>
      <footer className="absolute bottom-6 text-sm text-neutral-400 animate-fade-in animation-delay-900">
        Powered by Firebase Studio
      </footer>
      <style jsx global>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        // Ensure animations run only once on load
        .animate-fade-in-down, .animate-fade-in-up, .animate-fade-in {
          opacity: 0; // Start transparent
        }
      `}</style>
    </div>
  );
}
