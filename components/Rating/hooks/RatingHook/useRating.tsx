import { useMemo } from 'react';
import type { useRatingProps } from './useRating.props';
import StarIcon from '@/components/Rating/star.svg';
import cn from 'classnames';
import styles from '@/components/Rating/Rating.module.css';

const useRating = (data: useRatingProps) => {
  const {
    displayRating,
    isEditable,
    changeDisplay,
    resetDisplay,
    handleClick,
    handleSpace,
    rating,
  } = data;

  const ratingArray = useMemo(() => {
    return new Array(5).fill(0).map((_, i) => {
      const starValue = i + 1;
      const isChecked = rating === starValue;

      const combinedStyles = cn(styles.star, {
        [styles.filled]: i < displayRating,
        [styles.editable]: isEditable,
      });

      return (
        <span
          key={i}
          className={combinedStyles}
          onMouseEnter={isEditable ? () => changeDisplay(starValue) : undefined}
          onMouseLeave={isEditable ? () => resetDisplay() : undefined}
          onClick={isEditable ? () => handleClick(starValue) : undefined}
          tabIndex={isEditable ? 0 : -1}
          role={isEditable ? 'radio' : undefined}
          aria-checked={isEditable ? isChecked : undefined}
          aria-label={isEditable ? `Поставить оценку ${starValue}` : undefined}
          onKeyDown={
            isEditable
              ? (e) => {
                  if (e.code === 'Enter') {
                    e.preventDefault();
                    handleSpace(starValue);
                  }
                }
              : undefined
          }
        >
          <StarIcon />
        </span>
      );
    });
  }, [
    displayRating,
    isEditable,
    changeDisplay,
    handleClick,
    handleSpace,
    resetDisplay,
    rating,
  ]);

  return ratingArray;
};

export default useRating;
