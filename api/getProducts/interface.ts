import type { ProductModel } from '@/interfaces';

export interface getProductsProps {
  (category: string | undefined): Promise<ProductModel[]>;
}
