import Link from 'next/link';
import { format } from 'date-fns';
import type { FooterProps } from './interface';
import styles from './Footer.module.css';

const Footer = ({ ...props }: FooterProps) => {
  return (
    <footer className={styles.footer} {...props}>
      <p className={styles.rules} suppressHydrationWarning>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </p>
      <Link
        href="/terms"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Пользовательское соглашение (откроется в новой вкладке)"
      >
        Пользовательское соглашение
      </Link>
      <Link
        href="/privacy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Политика конфиденциальности (откроется в новой вкладке)"
      >
        Политика конфиденциальности
      </Link>
    </footer>
  );
};

export default Footer;
