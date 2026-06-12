import Link from 'next/link';
import type { FirstLevelProps } from './interface';
import { SecondLevel } from '../index';
import { firstLevelMenu } from '@/helpers';
import cn from 'classnames';
import styles from '../styles/utils.module.css';

const FirstLevel = ({ pathName }: FirstLevelProps) => {
 const activeMenuItem = firstLevelMenu.find((m) =>
   pathName.startsWith(`/${m.route}`),
 );

 const currentActiveCategoryId = activeMenuItem
   ? activeMenuItem.id
   : firstLevelMenu[0].id;

  return (
    <ul style={{ listStyle: 'none' }}>
      {firstLevelMenu.map((m) => {
        const isActive = m.id === currentActiveCategoryId;

        return (
          <li key={m.route}>
            <Link
              href={`/${m.route}`}
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: isActive,
              })}
              aria-current={isActive ? 'page' : undefined}
            >
              <span aria-hidden="true" className={styles.iconWrapper}>
                {m.icon}
              </span>
              <span>{m.name}</span>
            </Link>

            {isActive && <SecondLevel menuItem={m} pathName={pathName} />}
          </li>
        );
      })}
    </ul>
  );
};

export default FirstLevel;
