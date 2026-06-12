import { Controller } from 'react-hook-form';
import type { RatingRowProps } from './interface';
import { Rating } from '@/components';
import classes from './RatingRow.module.css';

const RatingRow = ({ control, errors, isSubmitting }: RatingRowProps) => {
  const errorId = 'rating-error';

  return (
    <div className={classes.ratingRow}>
      <span className={classes.label} id="rating-label">
        Оценка:
      </span>

      <Controller
        control={control}
        name="rating"
        rules={{
          min: { value: 1, message: 'Пожалуйста, поставьте оценку курсу' },
        }}
        render={({ field }) => (
          <div
            role="radiogroup"
            aria-labelledby="rating-label"
            aria-invalid={!!errors.rating}
            aria-describedby={errors.rating ? errorId : undefined}
          >
            <Rating
              rating={field.value}
              isEditable={!isSubmitting}
              setRating={field.onChange}
            />
          </div>
        )}
      />

      {errors.rating && (
        <span id={errorId} role="alert" className={classes.errorMessage}>
          {errors.rating.message}
        </span>
      )}
    </div>
  );
};

export default RatingRow;
