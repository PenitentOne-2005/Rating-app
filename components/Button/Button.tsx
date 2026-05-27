import type { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';

const Button = ({
  appearance,
  children,
  arrow = 'none',
  ...props
}: ButtonProps) => {
  const classes = {
    [styles.down]: arrow == 'down',
    [styles.right]: arrow == 'right',
    [styles.ghost]: appearance == 'ghost',
    [styles.primary]: appearance == 'primary',
  };

  return (
    <button className={cn(styles.button, classes)} {...props}>
      {children}

      {arrow !== 'none' && (
        <span className={cn(styles.arrow, classes)}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
