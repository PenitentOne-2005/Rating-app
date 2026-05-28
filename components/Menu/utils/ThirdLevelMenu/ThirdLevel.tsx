import cn from 'classnames';
import Link from 'next/link';
import type { ThirdLevelProps } from './interface';
import styles from '../styles/utils.module.css';

const ThirdLevel = ({ pages, route, pathName }: ThirdLevelProps) => {
  return (
    <>
      {pages.map((p) => {
        const isActive = pathName === `/${route}/${p.alias}`;

        return (
          <Link
            key={p._id}
            href={`/${route}/${p.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: isActive,
            })}
          >
            {p.category}
          </Link>
        );
      })}
    </>
  );
};

export default ThirdLevel;
