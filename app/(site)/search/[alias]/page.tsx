import type { SearchPageProps } from './interface';
import { notFound } from 'next/navigation';
import { getPage } from '@/api';
import { ProductList } from '@/components';
import classes from './page.module.css';

const SearchItem = async ({ params, searchParams }: SearchPageProps) => {
  const { alias } = await params;
  const { q: searchQuery } = await searchParams;

  if (!alias) {
    notFound();
  }

  const page = await getPage(alias);
  if (!page) {
    notFound();
  }

  const allProducts = page.products || [];

  const filteredProducts = allProducts.filter((product) => {
    if (!searchQuery || !searchQuery.trim()) {
      return true;
    }

    const query = searchQuery.toLowerCase().trim();

    return (
      product.title.toLowerCase().includes(query) ||
      (product.description && product.description.toLowerCase().includes(query))
    );
  });

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          Результаты поиска по запросу:{' '}
          <span className={classes.queryText}>«{searchQuery || ''}»</span>
        </h1>
        <p className={classes.subtitle}>
          Категория: {page.title} — Найдено курсов: {filteredProducts.length}
        </p>
      </header>

      <main className={classes.main}>
        {filteredProducts.length > 0 ? (
          <div className={classes.grid}>
            <ProductList products={filteredProducts} />
          </div>
        ) : (
          <div className={classes.emptyState}>
            <h3>Ничего не найдено</h3>
            <p>
              К сожалению, по запросу {searchQuery} в данной категории нет
              подходящих курсов.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchItem;
