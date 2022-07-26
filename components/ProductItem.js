/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react';

export default function ProductItem({ item }) {
  const [imageFocused, setImageFocused] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Link href="#">
        <a
          onMouseEnter={() => setImageFocused(true)}
          onMouseLeave={() => setImageFocused(false)}
        >
          <img
            src={imageFocused ? item.images[1] : item.images[0]}
            className="transition-all"
            alt={item.slug}
          />
        </a>
      </Link>
      <Link href="#">
        <a>
          <h3 className="text-center font-medium text-sm">{item.name}</h3>
          <div className="flex flex-row justify-center">
            {item.sale_price < item.price && (
              <h3 className="text-center text-sm font-medium text-red-500">
                ₱{item.sale_price}&nbsp;
              </h3>
            )}
            <h3
              className={`${
                item.sale_price < item.price && 'line-through text-gray-500'
              } text-center text-sm`}
            >
              ₱{item.price}
            </h3>
          </div>
        </a>
      </Link>
    </div>
  );
}
