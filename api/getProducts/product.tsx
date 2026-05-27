import { API } from '@/app/api';
import type { getProductsProps } from './interface';

const getProducts: getProductsProps = async (category) => {
  try {
    const res = await fetch(API.product.find, {
      method: 'POST',
      body: JSON.stringify({ category, limit: 10 }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getProducts;
