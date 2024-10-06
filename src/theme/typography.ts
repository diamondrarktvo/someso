import { Size } from "./size";

export const Typography = {
  veryBigTitle: {
    fontWeight: "600",
    fontSize: Size.TYPO.veryBig, //20
  },
  titleBold: {
    fontWeight: "bold",
    fontSize: Size.TYPO.big, //18,
  },
  title: {
    fontWeight: "400",
    fontSize: Size.TYPO.big, //18,
  },
  primary: {
    fontSize: Size.TYPO.primary, //16,
  },
  primaryBold: {
    fontSize: Size.TYPO.primary, //16,
    fontWeight: "bold",
  },
  secondary: {
    fontSize: Size.TYPO.secondary, //16
  },
  secondaryBold: {
    fontSize: Size.TYPO.secondary, //16
    fontWeight: "bold",
  },
  tertiary: {
    fontSize: Size.TYPO.tertiary, //14
  },
  tertiaryBold: {
    fontSize: Size.TYPO.tertiary, //14
    fontWeight: "bold",
  },
  button: {
    fontSize: Size.TYPO.primary,
  },
  link: {
    fontSize: Size.TYPO.secondary,
    textDecorationLine: "underline",
    fontWeight: "600",
  },
};
