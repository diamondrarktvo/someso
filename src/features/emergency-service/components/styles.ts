import { palette } from "_theme";
import { SCREEN_SIZE } from "_utils";
import { StyleSheet } from "react-native";

export const mapStyles = StyleSheet.create({
  view_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.offWhite,
  },
  map: {
    width: SCREEN_SIZE.width,
    height: SCREEN_SIZE.height,
  },
});
