import type { MenuItem } from '@/interfaces';

export interface getMenuProps {
  (firstCategory: number): Promise<MenuItem[]>;
}
