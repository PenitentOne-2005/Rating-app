'use client';

import { type KeyboardEvent, useState } from 'react';
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

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code === 'Space' && setRating) {
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
  };

  const ratingArray = useRating(data);

  return (
    <div {...props}>
      {ratingArray.map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
