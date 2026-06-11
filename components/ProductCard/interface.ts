import type { ProductModel } from '@/interfaces';

export interface ProductCardProps {
  product: ProductModel;
  view?: 'compact' | 'full';
}
