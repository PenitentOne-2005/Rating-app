import { API } from '@/app/api';
import type { getProductsProps } from './interface';

const getProducts: getProductsProps = async (category) => {
  try {
    const res = await fetch(API.pages, {
      method: 'GET',
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    const pages = await res.json();

    const targetPage = pages.find((page: any) => page.category === category);

    return targetPage && targetPage.products ? targetPage.products : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getProducts;
