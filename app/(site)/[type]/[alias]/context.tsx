'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { ProductModel } from '@/interfaces';

interface CourseContextType {
  pageId: string;
  products: ProductModel[];
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

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
  const [products, _] = useState<ProductModel[]>(initialProducts);

  return (
    <CourseContext.Provider value={{ products, pageId }}>
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
