import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function CartItem({ item }) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(item.quantity);
  }, []);

  const handleQuantityChange = (action) => {
    switch (action) {
      case 'minus':
        return setQty((prevQty) => prevQty - 1);
      case 'add':
        return setQty((prevQty) => prevQty + 1);
    }
  };

  return (
    <div className="flex gap-3 w-full">
      <div className="w-1/3">
        <Image
          src={item.image}
          width={450}
          height={600}
          layout="responsive"
          alt={item.name}
        />
      </div>
      <div className="flex flex-col justify-between w-full my-1">
        <div className="flex flex-col gap-1">
          <div className="uppercase text-sm font-semibold">{item.name}</div>
          <div className="uppercase text-sm ">{item.size}</div>
          <div className="uppercase text-sm ">P{item.price}</div>
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center gap-3 border border-black px-2.5 py-1.5 text-xs justify-evenly">
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
          <button className="flex gap-1 uppercase text-xs items-center text-gray-500">
            Remove <IoCloseOutline color="rgb(107, 114, 128)" />
          </button>
        </div>
      </div>
    </div>
  );
}
