import React, { useContext } from 'react';
import ProductColumn from '../ProductColumn/ProductColumn';
import styles from './ContainerGrid.module.scss';
import Context from '../../Context/Context';

const ContainerGrid = () => {
  const { data } = useContext(Context);

  return (
    <div class={`row m-0 row-cols-4 ${styles.grid}`}>
      <div
        className={`d-flex justify-content-center align-items-center flex-column ${styles.categoryColumn}`}
      >
        <h2 className={`mb-4 ${styles.categoryHeading}`}>{data[0].category}</h2>
        <span className={`${styles.categoryText}`}>Shop Now</span>
      </div>
      {data.map((product, i) => {
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
