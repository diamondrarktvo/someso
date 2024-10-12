export type ModuleT = {
  id: string;
  title: string;
  sections: SectionT[];
};

export type SectionT = {
  id: string;
  title: string;
  items?: ItemT[];
};

export type ItemT = {
  id: string;
  title: string;
  options?: string[];
};
