'use client';

import { useState } from 'react';
import type { ProductCardProps } from './ProductCard.props';
import { Button, Rating, Reviews } from '@/components';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }: ProductCardProps) => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  const reviews = product.reviews || [];

  return (
    <div className={styles.card}>
      <div className={styles.logo}>Mock</div>

      <div className={styles.mainInfo}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.tagWrapper}>
          <span className={styles.tag}>Разработка</span>
          <span className={styles.tag}>MockAPI</span>
        </div>
      </div>

      <div className={styles.priceBlock}>
        <div className={styles.value}>
          {product.price.toLocaleString()} ₽
          {product.oldPrice && (
            <span className={styles.oldPrice}>
              {product.oldPrice.toLocaleString()} ₽
            </span>
          )}
        </div>
        <div className={styles.label}>цена</div>
      </div>

      <div className={styles.creditBlock}>
        <div className={styles.value}>
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

      <div className={styles.divider} />

      <p className={styles.description}>{product.description}</p>

      <div className={styles.features}>
        <div className={styles.charList}>
          <div className={styles.charItem}>
            <span className={styles.charName}>Документ об окончании</span>
            <span className={styles.charDots} />
            <span className={styles.charValue}>Диплом</span>
          </div>
          <div className={styles.charItem}>
            <span className={styles.charName}>Сложность</span>
            <span className={styles.charDots} />
            <span className={styles.charValue}>Начальная</span>
          </div>
          <div className={styles.charItem}>
            <span className={styles.charName}>Длительность</span>
            <span className={styles.charDots} />
            <span className={styles.charValue}>5 месяцев</span>
          </div>
        </div>

        <div className={styles.prosCons}>
          <div className={styles.proBlock}>
            <div className={styles.blockTitle}>Преимущества</div>
            <div>
              Отличный структурированный материал, работа с наставником.
            </div>
          </div>
          <div className={styles.conBlock}>
            <div className={styles.blockTitle}>Недостатки</div>
            <div>Некоторые темы требуют дополнительного гугления.</div>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button
          appearance="ghost"
          arrow={isReviewsOpen ? 'down' : 'right'}
          onClick={() => setIsReviewsOpen((isReviewsOpen) => !isReviewsOpen)}
        >
          Читать отзывы
        </Button>
      </div>

      {isReviewsOpen && <Reviews reviews={reviews} />}
    </div>
  );
};

export default ProductCard;
