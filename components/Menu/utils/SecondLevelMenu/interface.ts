interface FirstLevelMenuItem {
  route: string;
  id: number;
}

export interface SecondLevelProps {
  menuItem: FirstLevelMenuItem;
  pathName: string;
}
