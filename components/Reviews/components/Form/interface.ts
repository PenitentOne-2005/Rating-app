import type { ReviewModel } from '@/interfaces';

export interface IReviewForm {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export interface FormProps {
  productId: string;
  onReviewSubmit: (updatedReviews: ReviewModel[]) => void;
}
