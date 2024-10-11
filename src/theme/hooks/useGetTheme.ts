import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme";
import { Size } from "../size";

export const useGetTheme = () => {
  const theme = useTheme<Theme>();
  const {
    primary,
    secondary,
    mainBackground,
    mainForeground,
    tertiary,
    error,
    success,
    white,
    black,
    offBlack,
    offWhite,
    text,
    textPrimaryColor,
    transparent,
    grey,
    textPrimaryDark,
    withoutOverlayDarkBg,

    blue,
  } = theme.colors;

  const { height, width } = theme.dimensions;

  const { none, xxs, xs, s, m, l, xl, xxl } = theme.spacing;

  const { sm, md, lg, hg } = theme.borderRadii;

  const {
    TYPO,
    ICON_LARGE,
    ICON_MEDIUM,
    ICON_SMALL,
    IMAGE_LARGE,
    IMAGE_MEDIUM,
    IMAGE_SMALL,
    DIMENSIONS,
  } = Size;

  return {
    colors: {
      primary,
      secondary,
      mainBackground,
      mainForeground,
      tertiary,
      error,
      success,
      white,
      blue,
      black,
      offBlack,
      offWhite,
      text,
      textPrimaryColor,
      transparent,
      grey,
      textPrimaryDark,
      withoutOverlayDarkBg,
    },
    dimensions: {
      height,
      width,
    },
    spacing: {
      none,
      xxs,
      xs,
      s,
      m,
      l,
      xl,
      xxl,
    },
    borderRadii: {
      sm,
      md,
      lg,
      hg,
    },
    sizes: {
      TYPO,
      ICON_LARGE,
      ICON_MEDIUM,
      ICON_SMALL,
      IMAGE_LARGE,
      IMAGE_MEDIUM,
      IMAGE_SMALL,
      DIMENSIONS,
    },
  };
};
