import React, { useEffect } from "react";
//IMPORT FROM NODE_MODULES
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

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
  const isMMkVContainValueForSkipOnboarding = useSelector(
    functionnalitySelectors.isUserAlreadyShowOnboardingScreen,
  );

  const { loading } = useKnowIfSkipOnboarding();

  useEffect(() => {
    const handleSplashScreen = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        if (!loading) {
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    };

    handleSplashScreen();
  }, [loading]);

  console.log("menuChoicedByUser", menuChoicedByUser);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          menuChoicedByUser
            ? "main_tabs"
            : isMMkVContainValueForSkipOnboarding
            ? "main_menu_screen"
            : "onboarding_screen"
        }
      >
        <Stack.Group
          screenOptions={stackNavigationConfig.screenOptionsForHiddenHeader}
        >
          {menuChoicedByUser ? (
            <Stack.Screen name={"main_tabs"} component={TabNavigation} />
          ) : (
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
