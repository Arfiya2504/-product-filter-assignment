
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground relative flex flex-col items-center justify-center min-h-screen text-center">
      
      <main className="p-8 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-down">
          Welcome to <span className="text-primary font-pacifico">ProductVerse</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl animate-fade-in-up animation-delay-300">
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
      <footer className="absolute bottom-6 text-sm text-muted-foreground animate-fade-in animation-delay-900">
        Powered by Firebase Studio
      </footer>
      {/* Animations (client-side compatible) */}
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
