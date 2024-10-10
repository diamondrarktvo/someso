import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StackNavigation } from "_navigations";
import { theme, darkTheme } from "_theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "_store";
import { LogBox } from "react-native";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // FIXME: Remove this when the issue is fixed
  LogBox.ignoreLogs([
    "`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.",
    "`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.",
  ]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        <SafeAreaProvider>
          <StatusBar backgroundColor={theme.colors.primary} />
          <StackNavigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
