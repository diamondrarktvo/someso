import { ThemeProvider } from "@shopify/restyle";
import { StackNavigation } from "_navigations";
import { functionnalitySelectors } from "_shared";
import { storage } from "_storage";
import { smsClimTheme, theme } from "_theme";
import { useMemo } from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Main = () => {
  const moduleChoicedByUser = useSelector(functionnalitySelectors.menuChoiced);

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

  return (
    <ThemeProvider theme={themeToUsed}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <StatusBar backgroundColor={themeToUsed?.colors.primary} />
            <StackNavigation />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default Main;
