'use client';

import { useState } from 'react';
import type { ProductCardProps } from './interface';
import { Button, Htag, Rating, Reviews } from '@/components';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, view }: ProductCardProps) => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [reviews, setReviews] = useState(() => product.reviews || []);

  const isFullView = view === 'full';

  return (
    <div className={styles.card}>
      <div className={styles.logo} aria-hidden="true">
        Mock
      </div>

      <div className={styles.mainInfo}>
        <Htag tag="h2">{product.title}</Htag>

        <div className={styles.tagWrapper}>
          <span className={styles.tag}>Разработка</span>
          <span className={styles.tag}>MockAPI</span>
        </div>
      </div>

      <div className={styles.priceBlock}>
        <div className={styles.value}>
          {product.price.toLocaleString()} ₽
          {product.oldPrice && (
            <span
              className={styles.oldPrice}
              aria-label={`Старая цена: ${product.oldPrice} рублей`}
            >
              {product.oldPrice.toLocaleString()} ₽
            </span>
          )}
        </div>
        <div className={styles.label}>цена</div>
      </div>

      <div className={styles.creditBlock}>
        <div
          className={styles.value}
          aria-label={`${product.credit.toLocaleString()} рублей`}
        >
          {product.credit.toLocaleString()} ₽/мес
        </div>
        <div className={styles.label}>в кредит</div>
      </div>

      <div className={styles.ratingBlock}>
        <div>
          <Rating rating={product.rating} isEditable={false} />
        </div>
        <div className={styles.label}>5 отзывов</div>
      </div>

      <div className={styles.divider} aria-hidden="true" />

      <p className={styles.description}>{product.description}</p>

      {isFullView && (
        <div className={styles.features}>
          {product.characteristics && product.characteristics.length > 0 && (
            <dl className={styles.charList}>
              {product.characteristics.map((characteristic) => (
                <div className={styles.charItem} key={characteristic.name}>
                  <dt className={styles.charName}>{characteristic.name}</dt>

                  <span className={styles.charDots} aria-hidden="true" />

                  <dd className={styles.charValue}>{characteristic.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <dl className={styles.prosCons}>
            {product.advantages?.map((advantage) => (
              <div
                className={styles.proBlock}
                key={advantage.name || advantage.title}
              >
                <dt className={styles.blockTitle}>
                  {advantage.name || advantage.title}
                </dt>
                <dd>{advantage.value || advantage.description}</dd>
              </div>
            ))}

            {product.flaws?.map((flaw) => (
              <div className={styles.conBlock} key={flaw.name}>
                <dt className={styles.blockTitle}>{flaw.name}</dt>
                <dd>{flaw.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className={styles.divider} aria-hidden="true" />

      {isFullView && (
        <div className={styles.actions}>
          <Button appearance="primary" onClick={() => window.location.reload()}>
            Купить
          </Button>
          <Button
            appearance="ghost"
            arrow={isReviewsOpen ? 'down' : 'right'}
            onClick={() => setIsReviewsOpen((isReviewsOpen) => !isReviewsOpen)}
            aria-expanded={isReviewsOpen}
          >
            Читать отзывы
          </Button>
        </div>
      )}

      {isFullView && isReviewsOpen && (
        <Reviews
          reviews={reviews}
          onReviewSubmit={setReviews}
          productId={product.id}
        />
      )}
    </div>
  );
};

export default ProductCard;
