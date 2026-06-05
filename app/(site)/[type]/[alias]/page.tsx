export { generateMetadata } from './generateMetadata';

import { notFound } from 'next/navigation';
import { getPage, getProducts } from '@/api';
import { ProductCard } from '@/components';

const Courses = async ({ params }: { params: { alias: string } }) => {
  const { alias } = await params;

  if (!alias) {
    notFound();
  }

  const page = await getPage(alias);
  if (!page) {
    notFound();
  }

  const products = await getProducts(alias);

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
    <>
      <header style={{ marginBottom: '30px' }}>
        <h1
          style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}
        >
          {page.title}
        </h1>
        <p style={{ color: '#4A5568', fontSize: '16px' }}>{page.description}</p>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {products.map((product) => (
          <ProductCard key={product._id || product.title} product={product} />
        ))}
      </main>
    </>
  );
};

export default Courses;
