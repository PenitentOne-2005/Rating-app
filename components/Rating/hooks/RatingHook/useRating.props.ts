import type { KeyboardEvent } from 'react';

export interface useRatingProps {
  displayRating: number;
  isEditable: boolean;
  changeDisplay: (rating: number) => void;
  resetDisplay: () => void;
  handleClick: (rating: number) => void;
  handleSpace: (rating: number, e: KeyboardEvent<SVGAElement>) => void;
}
