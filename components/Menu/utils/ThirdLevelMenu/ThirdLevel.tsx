import cn from 'classnames';
import Link from 'next/link';
import type { ThirdLevelProps } from './interface';
import styles from '../styles/utils.module.css';

const ThirdLevel = ({ pages, route, pathName }: ThirdLevelProps) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {pages.map((p) => {
        const isActive = pathName === `/${route}/${p.alias}`;

        return (
          <li key={p.id}>
            <Link
              href={`/${route}/${p.alias}`}
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: isActive,
              })}
              aria-current={isActive ? 'page' : undefined}
            >
              {p.category}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ThirdLevel;
