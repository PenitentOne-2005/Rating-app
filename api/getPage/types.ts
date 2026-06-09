import type { TopPageModel } from '@/interfaces';

export type GetPageType = {
  (): Promise<TopPageModel[] | null>;
  (alias: string): Promise<TopPageModel | null>;
};
