import React from 'react';
import Column from '../Column/Column';

const ContainerGrid = () => {
  const fakeData = [
    {
      src: 'productSource',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
    },
    {
      src: 'productSource',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
    },
    {
      src: 'productSource',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
    },
    {
      src: 'productSource',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
    },
    {
      src: 'productSource',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
    },
    {
      src: 'productSource',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
    },
    {
      src: 'productSource',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
    },
    {
      src: 'productSource',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
    },
  ];

  return (
    <div class="container">
      <div class="row row-cols-4">
        {fakeData.map((product) => {
          return (
            <Column
              src={product.src}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContainerGrid;
