import type { HeaderProps } from './interface';
import styles from './Header.module.css';

const Header = ({ ...props }: HeaderProps) => {
  return (
    <header className={styles.header} {...props}>
      Header
    </header>
  );
};

export default Header;
