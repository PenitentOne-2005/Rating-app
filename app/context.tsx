'use client';

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { ProductModel } from '@/interfaces';

export enum SortEnum {
  Rating,
  Price,
}

interface CourseContextType {
  pageId: string;
  products: ProductModel[];
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

export const CourseContext = createContext<CourseContextType | undefined>(
  undefined,
);

interface CourseProviderProps {
  pageId: string;
  initialProducts: ProductModel[];
  children: ReactNode;
}

export const CourseContextProvider = ({
  pageId,
  initialProducts,
  children,
}: CourseProviderProps) => {
  const [products] = useState<ProductModel[]>(initialProducts);
  const [sort, setSort] = useState<SortEnum>(SortEnum.Rating);

  const sortedProducts = useMemo(() => {
    const productsCopy = [...products];

    if (sort === SortEnum.Rating) {
      return productsCopy.sort((a, b) => b.rating - a.rating);
    }

    if (sort === SortEnum.Price) {
      return productsCopy.sort((a, b) => a.price - b.price);
    }

    return productsCopy;
  }, [products, sort]);

  return (
    <CourseContext.Provider
      value={{ products: sortedProducts, pageId, sort, setSort }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);

  if (!context) {
    throw new Error(
      'useCourse должен использоваться внутри CourseContextProvider',
    );
  }

  return context;
};
