export { generateMetadata } from './generateMetadata';

import { notFound } from 'next/navigation';
import { getPage, getProducts } from '@/api';

const Courses = async ({ params }: { params: { alias: string } }) => {
  const { alias } = await params;

  if (!alias) {
    notFound();
  }

  const page = await getPage(alias);
  if (!page) {
    notFound();
  }

  const products = await getProducts(page.category);

  if (!products || products.length === 0) {
    return (
      <div style={{ padding: '40px' }}>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        <div style={{ marginTop: '20px', color: '#718096' }}>
          No products found for this category ({page.category}).
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
      <h2 style={{ marginTop: '20px' }}>Products: {products.length}</h2>
      {/* Сюда позже вернуть полноценный компонент со списком продуктов */}
    </div>
  );
};

export default Courses;
