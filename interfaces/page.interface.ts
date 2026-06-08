import type { ProductModel } from './product.interface';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
}


export interface TopPageModel {
  id: string;
  alias: string;
  title: string;
  category: string;
  description: string;
  advantages: AdvantageItem[];
  skills: string[];
  products: ProductModel[];
}
