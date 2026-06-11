import type { ProductModel } from '@/interfaces';

export interface ProductListProps {
  products?: ProductModel[];
  view?: 'full' | 'compact';
}
