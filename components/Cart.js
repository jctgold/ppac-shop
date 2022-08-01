import React, { useContext, useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import CartItem from './CartItem';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { IoClose, IoCloseOutline } from 'react-icons/io5';
import { Store } from '../utils/Store';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';

function Cart({ onBackPress }) {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  // const router = useRouter();

  useEffect(() => {
    document.getElementById('cart').focus();
  }, []);

  const handleBlurEvent = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      onBackPress();
    }
  };

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/products/${item._id}`);
    // if (data.countInStock < quantity) {
    //   return toast.error('Sorry. Product is out of stock');
    // }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    toast.success('Product updated in the cart');
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
        className="w-full h-screen sm:max-w-md bg-white dark:bg-black ml-auto border-l border-black dark:border-white"
        initial={{ opacity: 1, x: 600 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 600 }}
        transition={{ duration: 0.5 }}
        onBlur={handleBlurEvent}
        id="cart"
        tabIndex={-1}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex p-4 border-b border-black dark:border-white items-center gap-3 justify-between">
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
            } flex flex-col h-full p-4 gap-5 overflow-auto`}
          >
            {cartItems.length < 1 ? (
              <div className="flex flex-col self-center text-center gap-5">
                <div className="text-sm uppercase">Your bag is empty.</div>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  item={item}
                  key={item.slug}
                  onQuantityChange={(e) =>
                    updateCartHandler(item, e.target.value)
                  }
                  onRemoveItem={() => removeItemHandler(item)}
                />
              ))
            )}
          </div>
          <div className="flex flex-col p-4 border-t border-black dark:border-white gap-3">
            <div className="flex justify-between items-center w-full ">
              <div className="uppercase text-sm">Subtotal</div>
              <div className="font-semibold">
                P
                {cartItems.reduce(
                  (a, c) =>
                    a +
                    c.quantity *
                      (c.prices.sale_price || c.prices.original_price),
                  0
                )}
              </div>
            </div>
            <button
              disabled={`${cartItems.length > 0 ? 'false' : 'true'}`}
              className={`disabled:bg-gray-300  primary-button`}
              type="button"
            >
              Checkout
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
