/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function CollectionCard({ item }) {
  return (
    <Link href="collections/new-in/">
      <a className="relative">
        <img
          src={item.coverImage}
          alt={item.name}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute bottom-0 text-center p-4 w-full bg-gradient-to-t to-transparent via-black/50  from-black/80">
          <div className="uppercase text-white text-xl font-semibold">
            {item.name}
          </div>
          <div className="uppercase text-white text-sm">{item.shortText}</div>
        </div>
      </a>
    </Link>
  );
}
