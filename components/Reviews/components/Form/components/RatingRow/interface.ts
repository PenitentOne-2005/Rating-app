import type { FieldErrors } from 'react-hook-form';
import type { IReviewForm } from '../../interface';
import type { Control } from 'react-hook-form';

export interface RatingRowProps {
  control: Control<IReviewForm>;
  errors: FieldErrors<IReviewForm>;
  isSubmitting: boolean;
}
