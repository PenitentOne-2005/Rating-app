import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage, getMenu, getProducts } from '@/api';

export const metadata: Metadata = {
  title: 'Products Page',
};

export async function generateStaticParams() {
  const menu = await getMenu(0);

  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias })),
  );
}

const Courses = async ({ params }: { params: { alias: string } }) => {
  if (!params?.alias) {
    notFound();
  }

  const page = await getPage(params.alias);
  if (!page) {
    notFound();
  }

  const products = await getProducts(page.category);
  if (!products || products.length === 0) {
    return <div>No products found for this category.</div>;
  }

  return <div>Products {products && products.length}</div>;
};

export default Courses;
