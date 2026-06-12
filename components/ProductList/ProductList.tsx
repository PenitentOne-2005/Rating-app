'use client';

import { useContext } from 'react';
import type { ProductListProps } from './interface';
import { CourseContext } from '@/app/context';
import ProductCard from '../ProductCard';
import classes from './ProductList.module.css';

const ProductList = ({ products: customProducts, view }: ProductListProps) => {
  const context = useContext(CourseContext);

  const contextProducts = context ? context.products : [];

  const productsToRender = customProducts || contextProducts;

  if (productsToRender.length === 0) {
    return null;
  }

  return (
    <ul className={classes.list}>
      {productsToRender.map((product) => (
        <li key={product.id || product.title} className={classes.listItem}>
          <ProductCard
            key={product.id || product.title}
            product={product}
            view={view}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
