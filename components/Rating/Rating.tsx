'use client';

import { useState } from 'react';
import type { RatingProps } from './interface';
import { useRating } from './hooks';

const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) => {
  const [displayRating, setDisplayRating] = useState<number>(rating);

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    setDisplayRating(i);
  };

  const resetDisplay = () => {
    if (!isEditable) return;
    setDisplayRating(rating);
  };

  const handleClick = (i: number) => {
    if (isEditable && setRating) {
      setRating(i);
    }
  };

  const handleSpace = (i: number) => {
    if (isEditable && setRating) {
      setRating(i);
      setDisplayRating(i);
    }
  };

  const data = {
    displayRating,
    isEditable,
    changeDisplay,
    resetDisplay,
    handleClick,
    handleSpace,
    rating,
  };

  const ratingArray = useRating(data);

  return (
    <div
      role={isEditable ? 'radiogroup' : undefined}
      aria-label={isEditable ? 'Рейтинг' : undefined}
      aria-roledescription={!isEditable ? `Оценка ${rating} из 5` : undefined}
      {...props}
    >
      {ratingArray}
    </div>
  );
};

export default Rating;
