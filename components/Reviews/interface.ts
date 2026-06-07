import type { ReviewModel } from '@/interfaces';

export interface ReviewsProps {
  reviews: ReviewModel[];
  onReviewSubmit: (updatedReviews: ReviewModel[]) => void;
  productId: string;
}
