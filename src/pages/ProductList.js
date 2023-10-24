import React from 'react';
import Product from '../components/Product';
import image1 from './../assets/images/1001.png';
import image2 from './../assets/images/1002.png';
import image3 from './../assets/images/1003.png';
import image4 from './../assets/images/1004.png';
import image5 from './../assets/images/1005.png';
import image6 from './../assets/images/1006.png';
import useTitle from '../hooks/useTitle';

const ProductList = () => {
  useTitle('Product List');

  const productList = [
    {
      id: 1,
      title: 'Sony Wh-ch10 bluetooth headphones',
      price: 10,
      img: image1,
    },
    {
      id: 2,
      title: 'Logitech Wh-ch10 headphones',
      price: 15,
      img: image2,
    },
    {
      id: 3,
      title: 'BOAT Wh-ch10 headphones',
      price: 20,
      img: image3,
    },
    {
      id: 4,
      title: 'JBL Wh-ch10 headphones',
      price: 25,
      img: image4,
    },
    {
      id: 5,
      title: 'Apple Wh-ch10 headphones',
      price: 30,
      img: image5,
    },
    {
      id: 6,
      title: 'Zebronics Wh-ch10 headphones',
      price: 35,
      img: image6,
    },
  ];
  return (
    <main>
      <section className='max-w-7xl mx-auto py-2 flex flex-wrap'>
        {productList.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </section>
    </main>
  );
};

export default ProductList;
