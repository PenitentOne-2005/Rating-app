import { API } from '@/app/api';
import type { getMenuProps } from './interface';

const getMenu: getMenuProps = async (firstCategory) => {
  try {
    const res = await fetch(API.topPage.find, {
      method: 'POST',
      body: JSON.stringify({ firstCategory }),
      headers: new Headers({ 'content-type': 'application/json' }),
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch menu: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getMenu;
