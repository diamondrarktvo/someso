import React from "react";
import { TabParamList, TopParamList } from "src/navigations/Types";

export interface TabRouteTypes {
  name: keyof TabParamList;
  component: React.FC<unknown>;
  tabLabel: string;
  icon: string;
}

export interface TopTabRouteTypes {
  name: keyof TopParamList;
  topLabel: string;
  component: React.FC<unknown>;
}

export type ModuleSomesoTypes = "sms_ana" | "sms_clim";
