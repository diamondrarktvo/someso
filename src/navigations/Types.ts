import { StackNavigationOptions } from "@react-navigation/stack";
import { ItemT, SectionT } from "_shared";

export interface StackNavigationConfig {
  screenOptionsForDisplayedHeader: StackNavigationOptions;
  screenOptionsForHiddenHeader: StackNavigationOptions;
}

export type StackParamList = {
  main_tabs: undefined;
  main_menu_screen: undefined;
  onboarding_screen: undefined;
  learn_screen: (SectionT | ItemT) & {
    svgImage: number;
  };
  reading_screen: {
    titleOfCourse: string;
  };
};

export type TabParamList = {
  home_screen: undefined;
  profile_screen: undefined;
};

export type TopParamList = {
  message_screen: undefined;
  notification_screen: undefined;
};
