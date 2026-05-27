interface PageItem {
  _id: string;
  alias: string;
  category: string;
}

export interface ThirdLevelProps {
  pages: PageItem[];
  route: string;
  pathName: string;
}
