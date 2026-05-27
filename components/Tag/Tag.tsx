import type { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

const Tag = ({
  size = 'small',
  children,
  href,
  color = 'ghost',
  ...props
}: TagProps) => {
  const classes = cn(styles.tag, {
    [styles.small]: size == 'small',
    [styles.medium]: size == 'medium',
    [styles.ghost]: color == 'ghost',
    [styles.red]: color == 'red',
    [styles.grey]: color == 'grey',
    [styles.green]: color == 'green',
    [styles.primary]: color == 'primary',
  });

  return (
    <div className={classes} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
