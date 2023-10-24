import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../features/cart/cartSlice';

const CardProduct = ({ cartProduct }) => {
  const { img, title, price, id } = cartProduct;
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  };

  return (
    <Link
      href=''
      className='flex flex-col mt-5 items-center min-w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
    >
      <img
        className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2'
        src={img}
        alt=''
      />
      <div className='flex flex-row flex-1 justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-lg tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-white margin-side'>
          ${price}
        </p>
        <button
          type='button'
          className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </Link>
  );
};

export default CardProduct;
