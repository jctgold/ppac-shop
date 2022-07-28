import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import CartItem from './CartItem';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { IoClose, IoCloseOutline } from 'react-icons/io5';

export default function Cart({ onBackPress }) {
  useEffect(() => {
    document.getElementById('cart').focus();
  }, []);

  const cartItems = [
    // {
    //   name: 'Product Name',
    //   slug: '001',
    //   size: 'XS',
    //   price: 500,
    //   quantity: 2,
    //   image: '/images/products/shirt1-1.jpg',
    // },
    // {
    //   name: 'Product Name 2',
    //   size: 'M',
    //   slug: '002',
    //   price: 1000,
    //   quantity: 1,
    //   image: '/images/products/shirt4-1.jpg',
    // },
    // {
    //   name: 'Product Name',
    //   slug: '001',
    //   size: 'XS',
    //   price: 500,
    //   quantity: 2,
    //   image: '/images/products/shirt1-1.jpg',
    // },
    // {
    //   name: 'Product Name 2',
    //   size: 'M',
    //   slug: '002',
    //   price: 1000,
    //   quantity: 1,
    //   image: '/images/products/shirt4-1.jpg',
    // },
  ];

  const handleBlurEvent = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      onBackPress();
    }
  };

  return (
    <div className="fixed w-full h-screen z-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top w-full h-full bg-black bg-opacity-75 -z-10"
      />
      <motion.div
        className="w-full h-screen sm:max-w-md bg-white ml-auto border-l border-black"
        initial={{ opacity: 1, x: 600 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 600 }}
        transition={{ duration: 0.5 }}
        onBlur={(event) => handleBlurEvent(event)}
        id="cart"
        tabIndex={-1}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex p-4 border-b border-black items-center gap-3 justify-between">
            <div className="flex flex-row items-center gap-2">
              <div className="uppercase font-semibold">Cart</div>
              <div className="text-xs">
                ({cartItems.length} item{cartItems.length > 1 && 's'})
              </div>
            </div>
            <button onClick={onBackPress} type="button">
              <IoCloseOutline size={24} />
            </button>
          </div>
          <div
            className={`${
              cartItems.length < 1 ? 'justify-center' : 'justify-start'
            } flex flex-col h-full p-4 gap-6 overflow-auto`}
          >
            {cartItems.length < 1 ? (
              <div className="flex flex-col self-center text-center gap-5">
                <div className="text-sm uppercase">Your bag is empty.</div>
              </div>
            ) : (
              cartItems.map((item) => <CartItem item={item} key={item.slug} />)
            )}
          </div>
          <div className="flex flex-col p-4 border-t border-black gap-3">
            <div className="flex justify-between items-center w-full ">
              <div className="uppercase text-sm">Subtotal</div>
              <div className="font-semibold">P1,000</div>
            </div>
            <button className="primary-button" type="button">
              Checkout
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
