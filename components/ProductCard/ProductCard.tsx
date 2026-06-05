import type { ProductCardProps } from './ProductCard.props';
import { Button, Rating } from '@/components';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      {/* 1. Логотип / Иконка */}
      <div className={styles.logo}>Mock</div>

      {/* 2. Основная информация */}
      <div className={styles.mainInfo}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.tagWrapper}>
          <span className={styles.tag}>Разработка</span>
          <span className={styles.tag}>MockAPI</span>
        </div>
      </div>

      {/* 3. Блок цены */}
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

      {/* 4. Блок кредита */}
      <div className={styles.creditBlock}>
        <div className={styles.value}>
          {product.credit.toLocaleString()} ₽/мес
        </div>
        <div className={styles.label}>в кредит</div>
      </div>

      {/* 5. Рейтинг */}
      <div className={styles.ratingBlock}>
        <div>
          <Rating rating={product.rating} isEditable={false} />
        </div>
        <div className={styles.label}>5 отзывов</div>
      </div>

      <div className={styles.divider} />

      {/* 6. Описание */}
      <p className={styles.description}>{product.description}</p>

      {/* 7. Характеристики и Преимущества */}
      <div className={styles.features}>
        {/* Левая колонка: Характеристики (имитируем макет) */}
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

        {/* Правая колонка: Плюсы и минусы */}
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

      {/* 8. Кнопки с использованием твоего Button */}
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right">
          Читать отзывы
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
