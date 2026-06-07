import { Controller } from 'react-hook-form';
import type { RatingRowProps } from './interface';
import { Rating } from '@/components';
import classes from './RatingRow.module.css';

const RatingRow = ({ control, errors, isSubmitting }: RatingRowProps) => {
  return (
    <div className={classes.ratingRow}>
      <span className={classes.label}>Оценка:</span>

      <Controller
        control={control}
        name="rating"
        rules={{
          min: { value: 1, message: 'Пожалуйста, поставьте оценку курсу' },
        }}
        render={({ field }) => (
          <Rating
            rating={field.value}
            isEditable={!isSubmitting}
            setRating={field.onChange}
          />
        )}
      />

      {errors.rating && (
        <span className={classes.errorMessage}>{errors.rating.message}</span>
      )}
    </div>
  );
};

export default RatingRow;
