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
import Toast, {
  ErrorToast,
  InfoToast,
  SuccessToast,
  ToastProps,
} from "react-native-toast-message";
import { RFValue } from "_utils";
import { Platform } from "react-native";

const Main = () => {
  const dispatch = useDispatch();
  const moduleChoicedByUser = useSelector(functionnalitySelectors.menuChoiced);
  const moduleData = ModuleDataJson.modules;
  const toastConfig = {
    success: (props: ToastProps) => (
      <SuccessToast
        {...props}
        style={{
          borderLeftColor: theme.colors.success,
        }}
      />
    ),
    error: (props: ToastProps) => (
      <ErrorToast
        {...props}
        text2NumberOfLines={2}
        style={{
          borderLeftColor: theme.colors.error,
        }}
      />
    ),
    info: (props: ToastProps) => (
      <InfoToast
        {...props}
        text2NumberOfLines={2}
        style={{
          borderLeftColor: theme.colors.primary,
        }}
      />
    ),
  };

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
            <Toast config={toastConfig} />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default Main;
