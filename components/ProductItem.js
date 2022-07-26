/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ item }) {
  return (
    <Link href="#">
      <a className="flex flex-col gap-3">
        <img src={item.image} alt={item.slug} />
        <div>
          <h3 className="text-center font-medium text-sm">{item.name}</h3>
          <h3 className="text-center text-sm">₱{item.price}</h3>
        </div>
      </a>
    </Link>
  );
}
