import type { InputProps } from './interface';
import styles from './Input.module.css';

const Input = ({ ref, error, ...props }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        ref={ref}
        {...props}
      />

      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export default Input;
