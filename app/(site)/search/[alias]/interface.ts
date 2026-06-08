export interface SearchPageProps {
  params: Promise<{ alias: string }>;
  searchParams: Promise<{ q?: string }>;
}
