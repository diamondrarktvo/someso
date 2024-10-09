import React from "react";
//IMPORT FROM NODE_MODULES
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//LOCAL IMPORT
import { stackNavigationConfig } from "./configStack";
import { StackParamList } from "./Types";
import { useSelector } from "react-redux";
import { functionnalitySelectors } from "_shared";

//IMPORT NAVIGATION TAB
import TabNavigation from "./TabNavigation";

//IMPORT SCREEN
import { MainMenuScreen, OnboardingScreen } from "_features";
import { useKnowIfSkipOnboarding } from "_hooks";

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {
  const menuChoicedByUser = useSelector(functionnalitySelectors.menuChoiced);

  const { isMMkVContainValueForSkipOnboarding } = useKnowIfSkipOnboarding();

  console.log(
    "isMMkVContainValueForSkipOnboarding",
    isMMkVContainValueForSkipOnboarding,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          isMMkVContainValueForSkipOnboarding
            ? "main_menu_screen"
            : "onboarding_screen"
        }
      >
        {menuChoicedByUser === "sms_ana" ||
          (menuChoicedByUser === "sms_clim" && (
            <Stack.Group
              screenOptions={stackNavigationConfig.screenOptionsForHiddenHeader}
            >
              <Stack.Screen name={"main_tabs"} component={TabNavigation} />
            </Stack.Group>
          ))}

        <Stack.Group
          screenOptions={stackNavigationConfig.screenOptionsForHiddenHeader}
        >
          {!menuChoicedByUser && (
            <>
              {!isMMkVContainValueForSkipOnboarding && (
                <Stack.Screen
                  name={"onboarding_screen"}
                  component={OnboardingScreen}
                />
              )}
              <Stack.Screen
                name={"main_menu_screen"}
                component={MainMenuScreen}
              />
            </>
          )}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
