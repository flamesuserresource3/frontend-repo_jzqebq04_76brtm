import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Hack Club. All rights reserved.</p>
            <p className="text-sm text-gray-600">Built with love by the community.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">Twitter</a>
            <a href="#" className="rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">GitHub</a>
            <a href="#" className="rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
