export interface ReviewModel {
  id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: string;
}

export interface ProductModel {
  id: string;
  alias: string;
  title: string;
  price: number;
  oldPrice?: number;
  credit: number;
  rating: number;
  description: string;
  reviews?: ReviewModel[];
}
