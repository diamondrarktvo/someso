import { ThemeProvider } from "@shopify/restyle";
import { StackNavigation } from "_navigations";
import { functionnalitySelectors, ModuleT, setModuleData } from "_shared";
import { storage } from "_storage";
import { smsClimTheme, theme } from "_theme";
import { useEffect, useMemo } from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ModuleDataJson from "_mock/data.json";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const moduleChoicedByUser = useSelector(functionnalitySelectors.menuChoiced);
  const moduleData = ModuleDataJson.modules;

  const themeToUsed = useMemo(() => {
    if (moduleChoicedByUser) {
      if (moduleChoicedByUser === "sms_ana") {
        return theme;
      }
      if (moduleChoicedByUser === "sms_clim") {
        return smsClimTheme;
      }
    } else {
      return theme;
    }
  }, [moduleChoicedByUser]);

  const statusBarBackgroundColor = useMemo(() => {
    if (moduleChoicedByUser) {
      if (moduleChoicedByUser === "sms_ana") {
        return theme.colors.primary;
      }
      if (moduleChoicedByUser === "sms_clim") {
        return smsClimTheme.colors.primary;
      }
    } else {
      return theme.colors.secondary;
    }
  }, [moduleChoicedByUser]);

  useEffect(() => {
    if (moduleChoicedByUser) {
      const selectedModule = moduleData.find(
        (module: ModuleT) => module.id === moduleChoicedByUser,
      );
      if (selectedModule) {
        dispatch(setModuleData(selectedModule));
      }
    }
  }, [moduleChoicedByUser, dispatch, moduleData]);

  return (
    <ThemeProvider theme={themeToUsed}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <StatusBar backgroundColor={statusBarBackgroundColor} />
            <StackNavigation />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default Main;
