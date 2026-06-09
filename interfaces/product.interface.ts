export interface ReviewModel {
  id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: string;
}

interface Characteristics {
  name: string;
  title: string;
  value: string;
  description: string;
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
  characteristics?: Characteristics[];
  advantages: Characteristics[];
  flaws: Characteristics[];
}
