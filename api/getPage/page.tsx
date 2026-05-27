import { API } from '@/app/api';
import type { getPageProps } from './interface';

const getPage: getPageProps = async (alias) => {
  const res = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

export default getPage;
