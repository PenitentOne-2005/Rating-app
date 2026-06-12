'use client';

import { useEffect, useState } from 'react';
import type { MenuItem } from '@/interfaces/menu.interface';
import type { SecondLevelProps } from './interface';
import { getMenu } from '@/api';
import { Button } from '@/components';
import { ThirdLevel } from '../index';
import cn from 'classnames';
import styles from '../styles/utils.module.css';

const SecondLevel = ({ menuItem, pathName }: SecondLevelProps) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenu(menuItem.id);
        const updatedMenu = data.map((m) => ({ ...m, isOpened: false }));
        setMenu(updatedMenu);
      } catch (error) {
        console.error('Ошибка загрузки меню:', error);
      }
    };

    fetchMenu();
  }, [menuItem.id]);

  const openSecondLevel = (secondCategory: string) => {
    setMenu((prevMenu) =>
      prevMenu.map((m) =>
        m.id.secondCategory === secondCategory
          ? { ...m, isOpened: !m.isOpened }
          : m,
      ),
    );
  };

  return (
    <ul className={styles.secondBlock}>
      {menu.map((m) => {
        return (
          <li key={m.id.secondCategory}>
            <Button
              appearance="ghost"
              type="button"
              onClick={() => openSecondLevel(m.id.secondCategory)}
              aria-expanded={m.isOpened}
            >
              {m.id.secondCategory}
            </Button>

            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
              aria-hidden={!m.isOpened}
            >
              <ThirdLevel
                pages={m.pages}
                route={menuItem.route}
                pathName={pathName}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SecondLevel;
