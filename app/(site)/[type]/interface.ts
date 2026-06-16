export interface CategoryProps {
  params: Promise<{
    type: string;
    alias: string;
  }>;
}
