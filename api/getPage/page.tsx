import { API } from '@/app/api';
import type { getPageProps } from './interface';

const getPage: getPageProps = async (alias = '') => {
  try {
    const URL = alias ? `${API.pages}?alias=${alias}` : `${API.pages}`;

    const res = await fetch(URL, {
      method: 'GET',
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      return null;
    }

    const pages = await res.json();

    return alias ? pages[0] : pages;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export default getPage;
