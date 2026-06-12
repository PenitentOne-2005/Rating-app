import type { InputProps } from './interface';
import styles from './Input.module.css';

const Input = ({ ref, error, ...props }: InputProps) => {
  const errorId = props.name ? `${props.name}-error` : undefined;

  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        ref={ref}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />

      {error && (
        <span id={errorId} role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
