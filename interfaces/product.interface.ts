export interface ProductModel {
  id: string;
  alias: string;
  title: string;
  price: number;
  oldPrice?: number;
  credit: number;
  rating: number;
  description: string;
}
