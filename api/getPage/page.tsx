import { API } from '@/app/api';
import type { GetPageType } from './types';

const getPage: GetPageType = async (alias?: string) => {
  try {
    const URL = alias ? `${API.pages}?alias=${alias}` : `${API.pages}`;

    const res = await fetch(URL, { method: 'GET', next: { revalidate: 10 } });

    if (!res.ok) return null;

    const pages = await res.json();

    if (!pages || (Array.isArray(pages) && pages.length === 0)) return null;

    return alias ? pages[0] : pages;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getPage;
