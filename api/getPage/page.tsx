import { API } from '@/app/api';
import type { TopPageModel } from '@/interfaces';

type GetPageType = {
  (): Promise<TopPageModel[] | null>;
  (alias: string): Promise<TopPageModel | null>;
  (alias: undefined, category: string): Promise<TopPageModel[] | null>;
};

const getPage: GetPageType = async (alias?: string, category?: string) => {
  try {
    const URL = alias ? `${API.pages}?alias=${alias}` : `${API.pages}`;

    const res = await fetch(URL, { method: 'GET', next: { revalidate: 3600 } });

    if (!res.ok) return null;

    const pages = await res.json();

    if (!pages || (Array.isArray(pages) && pages.length === 0)) return null;

    if (alias) {
      return pages[0] || null;
    }

    if (category) {
      const filtered = pages.filter(
        (page: TopPageModel) => page.category === category,
      );

      return filtered.length > 0 ? filtered : null;
    }

    return pages;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getPage;
