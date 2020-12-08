import React from 'react';
import ProductColumn from '../ProductColumn/ProductColumn';
import styles from './ContainerGrid.module.scss';

const ContainerGrid = () => {
  const fakeData = [
    {
      src: '/images/montec_air_900.jpg',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
      isInStock: false,
      category: 'ATX Cases',
    },
    {
      src: '/images/montec_air_900.jpg',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
      isInStock: false,
      category: 'ATX Cases',
    },
    {
      src: '/images/montec_air_900.jpg',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
      isInStock: true,
    },
    {
      src: '/images/montec_air_900.jpg',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
      isInStock: false,
      category: 'ATX Cases',
    },
    {
      src: '/images/montec_air_900.jpg',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
      isInStock: true,
    },
    {
      src: '/images/montec_air_900.jpg',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
      isInStock: false,
      category: 'ATX Cases',
    },
    {
      src: '/images/montec_air_900.jpg',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
      isInStock: false,
      category: 'ATX Cases',
    },
    {
      src: '/images/montec_air_900.jpg',
      title: 'Montech Air 900 Mesh ATX Mid-Tower PC Gaming Case',
      price: 62,
      isInStock: false,
      category: 'ATX Cases',
    },
  ];

  return (
    <div class={`row m-0 row-cols-4 ${styles.grid}`}>
      <div
        className={`d-flex justify-content-center align-items-center flex-column ${styles.categoryColumn}`}
      >
        <h2 className={`mb-4 ${styles.categoryHeading}`}>
          {fakeData[0].category}
        </h2>
        <span className={`${styles.categoryText}`}>Shop Now</span>
      </div>
      {fakeData.map((product, i) => {
        return (
          <ProductColumn
            src={product.src}
            title={product.title}
            price={product.price}
            index={i}
          />
        );
      })}
    </div>
  );
};

export default ContainerGrid;
