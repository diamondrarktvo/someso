export type ModuleT = {
  id: string;
  title: string;
  sections: SectionT[];
};

export type SectionT = {
  id: string;
  title: string;
  items?: ItemT[];
  options?: string[];
};

export type ItemT = {
  id: string;
  title: string;
  options?: string[];
};


export interface MenuI {
  id: number;
  menu_name: string;
  description: string;
  is_end: number;
  created_at: string | null;
  updated_at: string | null;
  action: string | null;
  controller: string | null;
  type: string | null;
  couche: number;
  options: OptionI[];
}

export interface OptionI {
  id: number;
  menu_id: number;
  option_value: string;
  option_description: string;
  next_menu_id: MenuI | null;
  created_at: string | null;
  updated_at: string | null;
  path: string | null;
  data_value: string | null;
  content: string | null;
}

export interface ResponseModuleI {
  message: string;
  languages: string;
  modules: {
    mg: MenuI[] | [];
    fr: MenuI[] | [];
    en: MenuI[] | [];
  };
}

export interface ResponseContentI {
  title: string;
  content: string;
}