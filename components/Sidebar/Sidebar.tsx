import type { SidebarProps } from './Sidebar.props';
import { Menu } from '../index';
import styles from './Sidebar.module.css';

const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <aside className={styles.sidebar} {...props}>
      <Menu />
    </aside>
  );
};

export default Sidebar;
