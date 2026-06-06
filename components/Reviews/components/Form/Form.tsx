import { Button, Rating } from '@/components';
import styles from './Form.module.css';

const Form = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <div className={styles.row}>
        <input type="text" placeholder="Имя" className={styles.input} />

        <input
          type="text"
          placeholder="Заголовок отзыва"
          className={styles.input}
        />

        <div className={styles.ratingRow}>
          <span className={styles.label}>Оценка:</span>
          <Rating rating={0} isEditable={true} />
        </div>
      </div>

      <textarea
        placeholder="Текст отзыва"
        rows={4}
        className={styles.textarea}
      />

      <div className={styles.actions}>
        <Button appearance="primary" type="submit">
          Отправить
        </Button>

        <span className={styles.notice}>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </span>
      </div>
    </form>
  );
};

export default Form;
