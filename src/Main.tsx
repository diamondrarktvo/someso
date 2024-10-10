import { ThemeProvider } from "@shopify/restyle";
import { StackNavigation } from "_navigations";
import { functionnalitySelectors } from "_shared";
import { storage } from "_storage";
import { smsClimTheme, theme } from "_theme";
import { useMemo } from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";

const Main = () => {
  const menuChoicedByUser = useSelector(functionnalitySelectors.menuChoiced);

  const themeToUsed = useMemo(() => {
    if (menuChoicedByUser) {
      if (menuChoicedByUser === "sms_ana") {
        return theme;
      }
      if (menuChoicedByUser === "sms_clim") {
        return smsClimTheme;
      }
    } else {
      return theme;
    }
  }, [menuChoicedByUser]);

  return (
    <ThemeProvider theme={themeToUsed}>
      <StatusBar backgroundColor={themeToUsed?.colors.primary} />
      <StackNavigation />
    </ThemeProvider>
  );
};

export default Main;
