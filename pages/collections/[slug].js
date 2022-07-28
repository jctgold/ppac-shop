import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import data from '../../utils/data';
import ProductItem from '../../components/ProductItem';
import { Menu, Transition } from '@headlessui/react';
import { AiOutlineDown } from 'react-icons/ai';
import DropdownLink from '../../components/DropdownLink';

const totalProducts = 64;
const loadedProducts = 16;

export default function CollectionsScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const collectionInfo = data.collections.find((x) => x.slug === slug);

  return (
    <Layout title={collectionInfo.name}>
      <div className="flex flex-col mt-16 mb-12 p-6 lg:p-12 gap-8">
        <div className="flex flex-row justify-between items-center">
          <h1 className="uppercase font-semibold text-xl">
            {collectionInfo.name}
          </h1>
          {/* <div className="uppercase text-sm">Sort By +</div> */}
          <div className="py-3">
            <Menu as="div" className="relative inline-block text-left text-xs">
              <Menu.Button className="uppercase">
                Sort By&nbsp;&nbsp;+
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="dropdown-container right-0 z-10 mt-3 w-32">
                  <Menu.Item className="dropdown-item py-1.5">
                    <DropdownLink href="/collections/all-products">
                      Featured
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item className="dropdown-item py-1.5">
                    <DropdownLink href="/collections/all-products">
                      New Arrivals
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item className="dropdown-item py-1.5">
                    <DropdownLink href="/collections/all-products">
                      Low to high
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item className="dropdown-item py-1.5">
                    <DropdownLink href="/collections/outerwear">
                      High to low
                    </DropdownLink>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.products.length > 0 &&
            data.products.map((item) => (
              <ProductItem key={item.slug} item={item} />
            ))}
        </div>
        <div className="flex flex-col text-center uppercase text-sm items-center gap-3">
          <p>
            You&apos;ve viewed {loadedProducts} of {totalProducts} products
          </p>
          <div className="w-64 h-0.5 bg-gray-200">
            <div
              className="bg-black h-full"
              style={{ width: `${(loadedProducts / totalProducts) * 100}%` }}
            />
          </div>
          <button className="secondary-button py-1.5 px-6 mt-4 font-medium">
            View More
          </button>
        </div>
      </div>
    </Layout>
  );
}
