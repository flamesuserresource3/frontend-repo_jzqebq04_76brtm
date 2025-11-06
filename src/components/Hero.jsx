import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Video scrolling animation placeholder with lorem ipsum */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Hack Club Merch
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#catalog" className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-medium hover:opacity-90 transition">Shop Now</a>
              <a href="#about" className="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-black font-medium hover:bg-black hover:text-white transition">Learn More</a>
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full rounded-xl bg-black/5 shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 animate-pulse rounded-full bg-black/10" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
