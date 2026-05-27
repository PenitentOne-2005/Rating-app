import { format } from 'date-fns';
import type { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

const Footer = ({ ...props }: FooterProps) => {
  return (
    <footer className={styles.footer} {...props}>
      <p className={styles.rules}>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </p>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
