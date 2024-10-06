import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StackNavigation } from "_navigations";
import { theme, darkTheme } from "_theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
   const [isDarkMode, setIsDarkMode] = useState(false);

   return (
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
         <SafeAreaProvider>
            <StatusBar backgroundColor={theme.colors.primary} />
            <StackNavigation />
         </SafeAreaProvider>
      </ThemeProvider>
   );
}
