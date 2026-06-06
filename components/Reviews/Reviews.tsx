import type { ReviewModel } from '@/interfaces';
import { Rating } from '../index';
import { Form } from './components';
import classes from './Reviews.module.css';

const Reviews = ({ reviews }: { reviews: ReviewModel[] }) => {
  return (
    <div className={classes.reviewsWrapper}>
      {reviews.map((rev) => (
        <div key={rev.id} className={classes.reviewItem}>
          <div className={classes.reviewInfo}>
            <div>
              <strong className={classes.reviewHeader}>{rev.name}:</strong>
              <span className={classes.reviewTitle}>{rev.title}</span>
            </div>

            <div className={classes.ratingDate}>
              <span className={classes.date}>
                {new Date(rev.createdAt).toLocaleDateString('ru-RU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <Rating rating={rev.rating} isEditable={false} />
            </div>
          </div>

          <p className={classes.reviewText}>{rev.description}</p>
        </div>
      ))}

      <Form />
    </div>
  );
};

export default Reviews;
