/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Image from 'next/image';

export default function ProductScreen({}) {
  const [selectedSize, setSelectedSize] = useState('XS');
  const [imageIndex, setImageIndex] = useState(0);

  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  return (
    <Layout title={product && product.name}>
      <div className="mt-16 mb-12">
        <div className="flex flex-col md:flex-row p-4 md:p-12 gap-4 md:gap-8 w-full">
          <div className="flex flex-col md:flex-row gap-3 w-full justify-start md:align-top">
            <img
              key={`${product.name}-${imageIndex}`}
              src={product.images && product.images[imageIndex]}
              alt={`${product.name} Image ${imageIndex}`}
              className="md:order-2 col-span-2 overflow-hidden self-start"
            />
            <div className="flex flex-row md:flex-col gap-3 md:order-1 flex-shrink-0 overflow-hidden">
              {product.images.map((image, index) => (
                <img
                  key={`${product.name}-${index}`}
                  src={image}
                  alt={`${product.name} Image ${index}`}
                  className={`w-36`}
                  onMouseEnter={() => setImageIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2 md:mt-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-l font-semibold">{product.name}</h1>
              <div className="flex flex-row justify-center md:justify-start">
                {product.prices.sale_price && (
                  <h3 className="text-center text-sm font-medium text-red-500">
                    ₱{product.prices.sale_price}&nbsp;
                  </h3>
                )}
                <h3
                  className={`${
                    product.prices.sale_price && 'line-through text-gray-500'
                  } text-center text-sm`}
                >
                  ₱{product.prices.original_price}
                </h3>
              </div>
            </div>

            {product.longDescription && (
              <p className="text-sm">{product.longDescription}</p>
            )}

            <div className="flex flex-col gap-1.5">
              <h3 className="uppercase text-sm">Size:</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                {product.sizes.map(
                  (size) =>
                    size.show && (
                      <button
                        key={size.code}
                        className={`${
                          selectedSize === size.name &&
                          'underline underline-offset-4'
                        } inline-block text-sm font-medium`}
                        onClick={() => setSelectedSize(size.name)}
                      >
                        {size.name}
                      </button>
                    )
                )}
              </div>
            </div>

            <button className="primary-button w-full " type="button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
