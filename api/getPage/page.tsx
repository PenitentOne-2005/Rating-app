import { API } from '@/app/api';
import type { getPageProps } from './interface';

const getPage: getPageProps = async (alias) => {
  try {
    const res = await fetch(`${API.pages}?alias=${alias}`, {
      method: 'GET',
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      return null;
    }

    const pages = await res.json();

    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getPage;
