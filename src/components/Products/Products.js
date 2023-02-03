import React, { useState } from 'react';
import { useStateContext } from '../../context/StateContext';

const Products = ({item}) => {
    const {id,name,price} = item
    const {onAdd} = useStateContext()
    const [qty, setQty] = useState(1);

    const incQty = () => {
      setQty((prevQty) => prevQty + 1);
    };
    const decQty = () => {
      setQty((prevQty) => {
        if (prevQty - 1 < 1) return 1;
        return prevQty - 1;
      });
    };
    
    return (
      <div>
        <div className="mx-2 w-64 lg:mb-0 mb-8">
          <div>
            <img
              src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
              className="w-full h-44"
            />
          </div>
          <div className="bg-white">
            <div className="flex items-center justify-between px-4 pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bookmark"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </div>
              <div className="bg-orange-200 py-1.5 px-6 rounded-full">
                <p className="text-xs text-orange-500">$50</p>
              </div>
            </div>
            <div className="flex justify-between items-center mx-auto mt-6 border-2  border-green-600">
              <button
                onClick={decQty}
                className="bg-green-600 px-4 py-2  text-white font-bold"
              >
                -
              </button>
              <div className="font-bold">{qty}</div>
              <button
                onClick={incQty}
                className="bg-green-600 px-4 py-2  text-white font-bold"
              >
                +
              </button>
            </div>
            <div>
              <button onClick={() => onAdd(item,qty)} className='bg-orange-500 text-white w-full py-1 mt-1'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Products;