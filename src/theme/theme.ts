import { createTheme } from "@shopify/restyle";
import { Size } from "./size";
import { Typography } from "./typography";

//PALETTE
const palette = {
  orangePrimary: "#F7AE7E",
  orangeDark: "#7E5940",
  orangePrimaryInput: "#F6F6F8",
  yellow: "#F5BD20",

  redBordeaux: "#FB222D",

  white: "#ffffff",
  grey: "#D9D9D9",
  greyNavTab: "#999999",
  blue: "#42a5f5",
  offWhite: "#F6F6F8",
  success: "green",
  black: "#0B0B0B",
  offBlack: "#252525",
  overlayDarkBg: "rgba(0, 0, 0, 0.65)",
  withoutOverlayDarkBg: "rgba(1, 1, 1, 0.8)",
  transparent: "transparent",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    primary: palette.orangePrimary,
    primaryDark: palette.orangeDark,
    input: palette.orangePrimaryInput,
    secondary: palette.grey, //grey
    greyNavTab: palette.greyNavTab,
    yellow: palette.yellow,
    error: palette.redBordeaux,
    blue: palette.blue,
    success: palette.success,
    white: palette.white,
    black: palette.black,
    offWhite: palette.offWhite,
    offBlack: palette.offBlack,
    overlayDarkBg: palette.overlayDarkBg,
    withoutOverlayDarkBg: palette.withoutOverlayDarkBg,
    text: palette.black,
    textPrimaryColor: palette.orangePrimary,
    transparent: palette.transparent,
  },
  spacing: {
    none: "0%",
    xxs: "1%",
    xs: "2%",
    s: "4%",
    m: "8%",
    l: "16%",
    xl: "32%",
    xxl: "40%",
  },
  dimensions: {
    ...Size.DIMENSIONS,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  borderRadii: {
    sm: 16,
    md: 24,
    lg: 32,
    hg: 100,
  },
  textVariants: {
    ...Typography,
    button: {
      ...Typography.button,
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
    },
    defaults: {
      fontSize: 12,
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: "primary",
      color: "white",
    },
    secondary: {
      backgroundColor: "secondary",
      color: "white",
    },
    tertiary: {
      backgroundColor: "black",
      color: "white",
      borderColor: "black",
    },
    outlined: {
      backgroundColor: "transparent",
      color: "primary",
      borderWidth: 2,
      borderColor: "primary",
    },
    buttonWithShadow: {
      backgroundColor: "white",
      color: "primary",
      borderWidth: 1,
      borderColor: "white",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
  },
});

const darkTheme = createTheme({
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
    primary: palette.orangePrimary,
    secondary: palette.black, //grey
    error: palette.redBordeaux,
    white: palette.offWhite,
    black: palette.offBlack,
    text: palette.white,
  },
});

export type Theme = typeof theme;
export { theme, darkTheme };
