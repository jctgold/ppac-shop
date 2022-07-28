/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CollectionCard from '../../components/CollectionCard';
import Layout from '../../components/Layout';

export default function CollectionsIndexScreen() {
  const collections = [
    {
      name: 'Desa X Rever',
      shortText: 'Summer 2022',
      redirect: '/collections/new-in',
      coverImage: '/images/cover-1.jpg',
    },
    {
      name: 'Cool Kids',
      shortText: 'Spring 2022',
      redirect: '/collections/new-in',
      coverImage: '/images/cover-4.jpg',
    },
    {
      name: 'Festive Holidays',
      shortText: 'Holiday 2021',
      redirect: '/collections/new-in',
      coverImage: '/images/cover8.jpg',
    },
    {
      name: 'Street & Crowd',
      shortText: 'September 2021',
      redirect: '/collections/new-in',
      coverImage: '/images/cover-3.jpg',
    },
  ];

  return (
    <Layout title="Collections">
      <div className="flex flex-col mt-16 mb-12 p-6 md:max-w-6xl lg:p-12 gap-8 mx-auto ">
        <div className="flex flex-row justify-between items-center">
          <h1 className="uppercase font-semibold text-xl">Collections</h1>
        </div>
        <div className="flex flex-col gap-4">
          {collections.map((item) => (
            <CollectionCard item={item} key={item.name} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
