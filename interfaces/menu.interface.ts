import type { JSX } from 'react';
import type { TopLevelCategory } from './page.interface';

export interface MockMenuItem {
  id: string;
  firstCategory: TopLevelCategory;
  alias: string;
  title: string;
}

export interface PageItem {
  alias: string;
  title: string;
  id: string;
  category: string;
}

export interface MenuItem {
  id: {
    secondCategory: string;
  };
  isOpened?: boolean;
  pages: PageItem[];
}

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
}
