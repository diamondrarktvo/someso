import { StackNavigationOptions } from "@react-navigation/stack";

export interface StackNavigationConfig {
   screenOptionsForDisplayedHeader: StackNavigationOptions;
   screenOptionsForHiddenHeader: StackNavigationOptions;
}

export type StackParamList = {
  main_tabs: undefined;
  main_menu_screen: undefined;
  onboarding_screen: undefined;
};

export type TabParamList = {
   home_screen: undefined;
   profile_screen: undefined;
};

export type TopParamList = {
   message_screen: undefined;
   notification_screen: undefined;
};
