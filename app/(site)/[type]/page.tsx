import { notFound } from 'next/navigation';
import type { CategoryProps } from './interface';
import { CourseContextProvider } from '@/app/context';
import { getPage } from '@/api';
import { ProductList } from '@/components';
import classes from './page.module.css';

const Category = async ({ params }: CategoryProps) => {
  const { type } = await params;

  let targetCategory = '';
  if (type === 'courses') targetCategory = 'Разработка';
  if (type === 'books') targetCategory = 'Книги';

  if (!targetCategory) notFound();

  const pages = await getPage(undefined, targetCategory);

  if (!pages) {
    notFound();
  }

  const allProducts = pages.flatMap((page) => page.products);

  return (
    <CourseContextProvider pageId={type} initialProducts={allProducts}>
      <div className={classes.container}>
        <h1>{type === 'courses' ? 'Курсы по разработке' : 'Книги'}</h1>

        <ProductList products={allProducts} />
      </div>
    </CourseContextProvider>
  );
};

export default Category;
