'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input, Button } from '@/components';
import classes from './Search.module.css';

const Search = () => {
  const [search, setSearch] = useState<string>('');

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(`/search/all?q=${encodeURIComponent(search)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      role="search"
      className={classes.searchWrapper}
    >
      <Input
        type="search"
        name="search"
        placeholder="Поиск..."
        value={search}
        style={{ width: '168px' }}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Поиск по сайту"
      />

      <Button type="submit" appearance="primary" aria-label="Искать">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M11.5 11.5L15 15M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Button>
    </form>
  );
};

export default Search;
