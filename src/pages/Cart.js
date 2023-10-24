import React from 'react';
import CardProduct from '../components/CardProduct';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { cartList, total } = useSelector((state) => state.cart);

  return (
    <main>
      <section className='mt-7'>
        <h2 className='text-center text-3xl font-bold dark:text-white'>
          Cart items: {total}
        </h2>
        <div>
          {cartList.map((cartProduct) => {
            return (
              <CardProduct key={cartProduct.id} cartProduct={cartProduct} />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Cart;
