'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FirstLevel } from './utils';
import styles from './Menu.module.css';

const Menu = () => {
  const pathName = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Предотвращаем рендеринг на сервере

  return (
    <nav className={styles.menu}>
      <FirstLevel pathName={pathName} />
    </nav>
  );
};

export default Menu;
