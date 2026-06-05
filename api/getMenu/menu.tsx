import { API } from '@/app/api';
import type { getMenuProps } from './interface';

const getMenu: getMenuProps = async (firstCategory) => {
  try {
    const res = await fetch(API.menu, {
      method: 'GET',
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch menu: ${res.statusText}`);
    }

    const mockDataFromApi = await res.json();

    const filtered = mockDataFromApi.filter(
      (item: any) => item.firstCategory === firstCategory,
    );

    return filtered.map((item: any) => ({
      _id: {
        secondCategory: item.title,
      },
      isOpened: false,
      pages: [
        {
          _id: item.id,
          alias: item.alias,
          title: item.title,
          category: item.title,
        },
      ],
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getMenu;
