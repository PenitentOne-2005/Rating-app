import type { ReviewsProps } from './interface';
import { Rating } from '../index';
import { Form } from './components';
import classes from './Reviews.module.css';

const Reviews = ({ reviews, onReviewSubmit, productId }: ReviewsProps) => {
  return (
    <ul id="product-reviews-list" className={classes.reviewsWrapper}>
      {reviews.map((rev) => (
        <li key={rev.id}>
          <article className={classes.reviewItem}>
            <div className={classes.reviewInfo}>
              <div>
                <strong className={classes.reviewHeader}>{rev.name}:</strong>

                <span style={{ display: 'none' }}>, </span>

                <span className={classes.reviewTitle}>{rev.title}</span>
              </div>

              <div className={classes.ratingDate}>
                <time
                  className={classes.date}
                  dateTime={new Date(rev.createdAt).toISOString()}
                >
                  {new Date(rev.createdAt).toLocaleDateString('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
                <Rating rating={rev.rating} isEditable={false} />
              </div>
            </div>

            <p className={classes.reviewText}>{rev.description}</p>
          </article>
        </li>
      ))}

      <Form onReviewSubmit={onReviewSubmit} productId={productId} />
    </ul>
  );
};

export default Reviews;
