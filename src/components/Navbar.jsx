import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white font-bold">HC</span>
          <span className="text-lg font-semibold tracking-tight">Hack Club Merch</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#catalog" className="hover:text-black transition-colors">Catalog</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#contact" className="rounded-full border border-black px-4 py-1.5 text-black hover:bg-black hover:text-white transition-colors">Get Updates</a>
        </nav>
      </div>
    </header>
  );
}
