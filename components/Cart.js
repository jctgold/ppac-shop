import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import CartItem from './CartItem';

export default function Cart({ onBackPress }) {
  useEffect(() => {
    document.getElementById('cart').focus();
  }, []);

  const cartItems = [
    {
      name: 'Product Name',
      slug: '001',
      size: 'XS',
      price: 500,
      quantity: 2,
      image: '/images/products/shirt1-1.jpg',
    },
    {
      name: 'Product Name 2',
      size: 'M',
      slug: '002',
      price: 1000,
      quantity: 1,
      image: '/images/products/shirt4-1.jpg',
    },
  ];

  const handleBlurEvent = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      onBackPress();
    }
  };

  return (
    <div className="fixed w-full z-20 h-screen bg-black bg-opacity-75">
      <div
        className="w-full h-screen sm:max-w-md bg-white ml-auto border-l border-black"
        onBlur={(event) => handleBlurEvent(event)}
        id="cart"
        tabIndex={-1}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex p-4 border-b border-black items-center gap-3">
            <button onClick={onBackPress} type="button">
              <BiArrowBack />
            </button>
            <div className="uppercase font-semibold">Cart</div>
          </div>
          <div className="flex flex-col h-full justify-start p-4 gap-6">
            {cartItems.map((item) => (
              <CartItem item={item} key={item.slug} />
            ))}
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
      </div>
    </div>
  );
}
