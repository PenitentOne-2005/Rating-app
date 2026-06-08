'use client';

import { useCourse, SortEnum } from '@/app/context';
import classes from './Sort.module.css';

const Sort = () => {
  const { sort, setSort } = useCourse();

  return (
    <div className={classes.sortWrapper}>
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={`${classes.sortBtn} ${sort === SortEnum.Rating ? classes.active : ''}`}
      >
        <svg
          className={classes.icon}
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1H16M0 6H11M0 11H6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        По рейтингу
      </button>

      <button
        onClick={() => setSort(SortEnum.Price)}
        className={`${classes.sortBtn} ${sort === SortEnum.Price ? classes.active : ''}`}
      >
        По цене
      </button>
    </div>
  );
};

export default Sort;
