import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';

const Product = ({ product }) => {
  const { img, title, price } = product;

  const dispatch = useDispatch();

  const handleProduct = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  const { cartList } = useSelector((state) => state.cart);

  const isInCart = (product) => {
    return cartList.some((item) => item.id === product.id);
  };

  const addButtonClass =
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';

  const removeButtonClass =
    'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-blue-800';
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3'>
      <Link>
        <img className='p-2 rounded-t-lg w-96 h-80' src={img} alt='product' />
      </Link>
      <div className='px-5 pb-5 mt-4'>
        <Link to='#'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </Link>
        <div className='flex items-center justify-between mt-7'>
          <span className='text-xl font-bold text-gray-900 dark:text-white'>
            ${price}
          </span>
          <button
            onClick={handleProduct}
            className={isInCart(product) ? removeButtonClass : addButtonClass}
            disabled={isInCart(product)}
          >
            {isInCart(product) ? 'Added to the cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
