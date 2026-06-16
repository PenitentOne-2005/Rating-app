'use client';

import { useCourse, SortEnum } from '@/app/context';
import { Button } from '@/components';
import classes from './Sort.module.css';

const Sort = () => {
  const { sort, setSort } = useCourse();

  return (
    <div className={classes.sortWrapper} role="group" aria-label="Сортировка">
      <Button
        type="button"
        appearance="ghost"
        onClick={() => setSort(SortEnum.Rating)}
        className={classes.sortBtn}
        aria-pressed={sort === SortEnum.Rating}
      >
        <svg
          className={classes.icon}
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 1H16M0 6H11M0 11H6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        По рейтингу
      </Button>

      <Button
        type="button"
        appearance="ghost"
        onClick={() => setSort(SortEnum.Price)}
        className={`${classes.sortBtn} ${sort === SortEnum.Price ? classes.active : ''}`}
        aria-pressed={sort === SortEnum.Price}
      >
        По цене
      </Button>
    </div>
  );
};

export default Sort;
