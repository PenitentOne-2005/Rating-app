'use client';

import { useContext } from 'react';
import type { ProductListProps } from './interface';
import { CourseContext } from '@/app/context';
import ProductCard from '../ProductCard';

const ProductList = ({ products: customProducts }: ProductListProps) => {
  const context = useContext(CourseContext);

  const contextProducts = context ? context.products : [];

  const productsToRender = customProducts || contextProducts;

  if (productsToRender.length === 0) {
    return null;
  }

  return (
    <>
      {productsToRender.map((product) => (
        <ProductCard key={product.id || product.title} product={product} />
      ))}
    </>
  );
};

export default ProductList;
