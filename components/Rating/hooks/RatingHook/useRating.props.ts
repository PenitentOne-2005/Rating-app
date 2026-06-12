export interface useRatingProps {
  displayRating: number;
  isEditable: boolean;
  rating: number;
  changeDisplay: (rating: number) => void;
  resetDisplay: () => void;
  handleClick: (rating: number) => void;
  handleSpace: (rating: number) => void;
}
