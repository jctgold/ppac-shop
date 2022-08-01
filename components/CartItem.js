import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function CartItem({ item, OnQuantityChange, onRemoveItem }) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(item.quantity);
  }, [item.quantity]);

  const handleQuantityChange = (action) => {
    switch (action) {
      case 'minus':
        return setQty((prevQty) => prevQty - 1);
      case 'add':
        return setQty((prevQty) => prevQty + 1);
    }

    OnQuantityChange();
  };

  return (
    <div className="flex gap-3 w-full">
      <div className="w-1/3">
        <Image
          src={item.images[0]}
          width={450}
          height={600}
          layout="responsive"
          alt={item.name}
        />
      </div>
      <div className="flex flex-col justify-between w-full my-1">
        <div className="flex flex-col gap-1 text-sm ">
          <div className="font-semibold">{item.name}</div>
          <div>{item.size}</div>
          <div className="flex flex-row justify-center md:justify-start">
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
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center gap-3 border border-black dark:border-white px-2.5 py-1.5 text-xs justify-evenly">
            <button
              onClick={() => handleQuantityChange('minus')}
              disabled={qty <= 1 && true}
              className="disabled:text-gray-500"
            >
              <AiOutlineMinus />
            </button>
            {qty}
            <button
              onClick={() => handleQuantityChange('add')}
              className="disabled:text-gray-500"
            >
              <AiOutlinePlus />
            </button>
          </div>
          <button
            className="flex gap-1 uppercase text-xs items-center text-gray-500"
            onClick={onRemoveItem}
          >
            Remove <IoCloseOutline color="rgb(107, 114, 128)" />
          </button>
        </div>
      </div>
    </div>
  );
}
