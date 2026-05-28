import Link from 'next/link';
import type { FirstLevelProps } from './interface';
import { SecondLevel } from '../index';
import { firstLevelMenu } from '@/helpers';
import cn from 'classnames';
import styles from '../styles/utils.module.css';

const FirstLevel = ({ pathName }: FirstLevelProps) => {
  const firstCategory = firstLevelMenu[0].id; // Предполагаем, что первый элемент всегда актуален

  return (
    <>
      {firstLevelMenu.map((m) => (
        <div key={m.route}>
          <Link href={`/${m.route}`}>
            <div
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id === firstCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </div>
          </Link>
          {m.id === firstCategory && (
            <SecondLevel menuItem={m} pathName={pathName} />
          )}
        </div>
      ))}
    </>
  );
};

export default FirstLevel;
