import type { ProductModel } from './product.interface';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageModel {
  id: string;
  alias: string;
  title: string;
  category: string;
  description: string;
  products: ProductModel[];
}
