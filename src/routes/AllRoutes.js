import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from '../pages/ProductList';
import Cart from '../pages/Cart';

const AllRoutes = () => {
  return (
    <div className='dark:bg-slate-800'>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
