export { generateMetadata } from './generateMetadata';

import { notFound } from 'next/navigation';
import { getPage } from '@/api';
import { ProductCard } from '@/components';
import classes from './page.module.css';

const Courses = async ({ params }: { params: { alias: string } }) => {
  const { alias } = await params;

  if (!alias) {
    notFound();
  }

  const page = await getPage(alias);
  if (!page) {
    notFound();
  }

  const products = page.products || [];

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
      <header className={classes.header}>
        <h1 className={classes.title}>{page.title}</h1>
        <p className={classes.description}>{page.description}</p>
      </header>

      <main className={classes.main}>
        {products.map((product) => (
          <ProductCard key={product.id || product.title} product={product} />
        ))}
      </main>
    </>
  );
};

export default Courses;
