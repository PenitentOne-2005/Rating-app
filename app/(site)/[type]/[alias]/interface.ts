export interface CoursePageProps {
  params: Promise<{
    type: string;
    alias: string;
  }>;
}
