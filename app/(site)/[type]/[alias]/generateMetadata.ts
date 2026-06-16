import type { Metadata } from 'next';
import type { CategoryProps } from '../interface';
import { getPage } from '@/api';

export async function generateMetadata({
  params,
}: CategoryProps): Promise<Metadata> {
  const { alias } = await params;
  const page = await getPage(alias);

  return {
    title: page ? `${page.title} - Course Catalog` : 'Course Catalog',
  };
}
