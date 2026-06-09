import type { TopPageModel } from '@/interfaces';

export interface getPageProps {
  (alias?: string): Promise<TopPageModel | null>;
}
