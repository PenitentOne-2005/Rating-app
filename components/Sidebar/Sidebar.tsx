import type { SidebarProps } from './interface';
import { Menu, Search } from '../index';
import styles from './Sidebar.module.css';

const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <aside className={styles.sidebar} {...props}>
      <Search />

      <Menu />
    </aside>
  );
};

export default Sidebar;
