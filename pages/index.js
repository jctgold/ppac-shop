/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout';
import Link from 'next/link';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';

export default function Home() {
  return (
    <Layout>
      <div className="h-screen bg-home-slide bg-cover flex flex-col gap-4 justify-center items-center bg-center">
        <p className="text-white uppercase">Explore the New Drop</p>
        <h1 className="text-6xl text-white uppercase font-semibold">SOOYOZ</h1>
        <button
          className="uppercase border px-8 p-1 text-sm text-white mt-4"
          type="button"
        >
          Shop Now
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-6 lg:p-12 gap-3">
        <Link href="#">
          <a className="relative group">
            <img
              src="images/clothing-1.jpg"
              alt="clothing"
              className="brightness-90 aspect-3/4 group-hover:brightness-75"
            />
            <div className="on-image-text">Clothing</div>
          </a>
        </Link>
        <Link href="#">
          <a className="relative group">
            <img
              src="images/bag-2.jpg"
              alt="clothing"
              className="brightness-90 aspect-3/4 group-hover:brightness-75"
            />
            <div className="on-image-text">Bags</div>
          </a>
        </Link>
        <Link href="#">
          <a className="relative group">
            <img
              src="images/socks-1.jpg"
              alt="clothing"
              className="brightness-90 aspect-3/4 group-hover:brightness-75"
            />
            <div className="on-image-text">Accessories</div>
          </a>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <img
          src="images/cover-1.jpg"
          alt="clothing"
          className="aspect-square object-cover flex-1 md:w-1/2"
        />
        <div className="flex flex-1 flex-row md:flex-col w-1/2">
          <img
            src="images/cover-5.jpg"
            alt="clothing"
            className="aspect-3/4 md:aspect-video object-cover"
          />
          <img
            src="images/cover-6.jpg"
            alt="clothing"
            className="aspect-3/4 md:aspect-video object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center p-12 md:px-24 md:py-20 gap-2">
        <h1 className="text-2xl uppercase font-semibold text-center">
          New Arrivals
        </h1>
        <button className="default-button" type="button">
          View All
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {data.products.length > 0 &&
            data.products.map((item) => (
              <ProductItem key={item.slug} item={item} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
