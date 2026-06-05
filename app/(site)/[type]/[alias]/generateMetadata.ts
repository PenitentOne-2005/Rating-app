import type { Metadata } from 'next';
import type { CoursePageProps } from './interface';
import { getPage } from '@/api';

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { alias } = await params;
  const page = await getPage(alias);

  return {
    title: page ? `${page.title} - Course Catalog` : 'Course Catalog',
  };
}
