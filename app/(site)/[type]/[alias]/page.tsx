export { generateMetadata } from './generateMetadata';

import type { CoursePageProps } from './interface';
import { notFound } from 'next/navigation';
import { getPage } from '@/api';
import { CourseContextProvider } from '@/app/context';
import { Advantages, ProductList, Skills, Sort } from '@/components';
import classes from './page.module.css';

const CategoryPage = async ({ params }: CoursePageProps) => {
  const { type, alias } = await params;

  if (!alias) {
    notFound();
  }

  const page = await getPage(alias);
  if (!page) {
    notFound();
  }

  const categoryMapping: Record<string, string[]> = {
    courses: ['Разработка', 'Дизайн'],
    books: ['Книги'],
  };

  const allowedCategories = categoryMapping[type] || [];

  if (!allowedCategories.includes(page.category)) {
    notFound();
  }

  const products = page.products || [];

  if (!products || products.length === 0) {
    let text = 'товаров';
    if (type === 'courses') text = 'курсы';
    if (type === 'books') text = 'книги';

    return (
      <div style={{ padding: '40px' }}>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        <div style={{ marginTop: '20px', color: '#718096', fontSize: '16px' }}>
          В категории «{page.title}» пока нет доступных {text}. Мы скоро их
          добавим!
        </div>
      </div>
    );
  }

  return (
    <CourseContextProvider pageId={page.id} initialProducts={products}>
      <header className={classes.header}>
        <div className={classes.headerMeta}>
          <h1 className={classes.title}>{page.title}</h1>
          <p className={classes.description}>{page.description}</p>
        </div>

        <Sort />
      </header>

      <main className={classes.main}>
        <ProductList view="full" />

        <Advantages advantages={page.advantages || []} />

        <Skills skills={page.skills || []} />
      </main>
    </CourseContextProvider>
  );
};

export default CategoryPage;
