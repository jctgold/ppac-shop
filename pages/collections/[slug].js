import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import data from '../../utils/data';
import ProductItem from '../../components/ProductItem';

export default function CollectionsScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const collectionInfo = data.collections.find((x) => x.slug === slug);

  return (
    <Layout title={collectionInfo.name}>
      <div className="mt-16 mb-12 p-6 lg:p-12">
        <div className="flex flex-row justify-between items-center">
          <h1 className="uppercase font-semibold text-xl">
            {collectionInfo.name}
          </h1>
          <div className="uppercase text-sm">Sort By +</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {data.products.length > 0 &&
            data.products.map((item) => (
              <ProductItem key={item.slug} item={item} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
