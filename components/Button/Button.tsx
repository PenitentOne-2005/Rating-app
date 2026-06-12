import Link from 'next/link';
import type { ButtonProps } from './interface';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';

const Button = ({
  appearance,
  children,
  arrow = 'none',
  href,
  ...props
}: ButtonProps) => {
  const classes = {
    [styles.down]: arrow == 'down',
    [styles.right]: arrow == 'right',
    [styles.ghost]: appearance == 'ghost',
    [styles.primary]: appearance == 'primary',
  };

  const content = (
    <>
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, classes)}>
          <ArrowIcon />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(styles.button, classes)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(styles.button, classes)} {...props}>
      {content}
    </button>
  );
};

export default Button;
