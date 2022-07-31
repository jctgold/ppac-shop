/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProductItem({ item }) {
  const [imageFocused, setImageFocused] = useState(false);

  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/products/${item.slug}`}>
        <a
          onMouseEnter={() => setImageFocused(true)}
          onMouseLeave={() => setImageFocused(false)}
        >
          <Image
            src={imageFocused ? item.images[1] : item.images[0]}
            alt={item.slug}
            className="transition-all"
            width={450}
            height={600}
            layout="responsive"
          />
        </a>
      </Link>
      <Link href="#">
        <a>
          <h3 className="text-center font-medium text-sm">{item.name}</h3>
          <div className="flex flex-row justify-center">
            {item.prices.sale_price && (
              <h3 className="text-center text-sm font-medium text-red-500">
                ₱{item.prices.sale_price}&nbsp;
              </h3>
            )}
            <h3
              className={`${
                item.prices.sale_price && 'line-through text-gray-500'
              } text-center text-sm`}
            >
              ₱{item.prices.original_price}
            </h3>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}
