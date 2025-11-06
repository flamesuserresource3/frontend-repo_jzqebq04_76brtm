import React from 'react';

const categories = [
  {
    title: 'Apparel',
    subtitle: 'Hoodies, Tees, and more',
    image:
      'https://images.unsplash.com/photo-1542326237-94b1c5a538d8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Accessories',
    subtitle: 'Stickers, pins, keychains',
    image:
      'https://images.unsplash.com/photo-1605649487212-47bdab064df3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Stationery',
    subtitle: 'Notebooks, pens, desk gear',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Limited Drops',
    subtitle: 'Seasonal exclusive releases',
    image:
      'https://images.unsplash.com/photo-1520975833367-7b38d2f1d5f4?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function CatalogGrid() {
  return (
    <section id="catalog" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Browse Catalogs</h2>
            <p className="mt-2 text-gray-600">Explore collections crafted by and for Hack Clubbers.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-full border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition">View All</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <a
              key={c.title}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
