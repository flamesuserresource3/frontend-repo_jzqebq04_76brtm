import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogGrid from './components/CatalogGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <CatalogGrid />
        <section id="about" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Hack Club Merch</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We celebrate builders. Hack Club Merch brings community-designed gear to life—crafted for students, by students. From comfy hoodies to stickers that rep your projects, every piece supports creativity and open-source spirit.
                </p>
                <p className="text-gray-700">
                  This is a concept storefront. The homepage features a video-style hero section with placeholder content for now, followed by curated catalogs you can explore.
                </p>
              </div>
              <div className="rounded-xl border border-black/10 p-6 bg-white shadow-sm">
                <h3 className="font-semibold mb-2">What to expect next</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Real product data, inventory, and checkout.</li>
                  <li>User accounts and order history.</li>
                  <li>Seasonal drops and community submissions.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
