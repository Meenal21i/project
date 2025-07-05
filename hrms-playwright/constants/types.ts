export type NavLink = {
  text: string;
  expectedUrl: string | RegExp;
};

export type NavStructureType = {
  [menu: string]: NavLink[];
};