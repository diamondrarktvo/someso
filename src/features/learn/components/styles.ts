import { palette } from "_theme";
import { RFValue } from "_utils";
import { StyleSheet } from "react-native";

export const learnStyles = StyleSheet.create({
  containerBoxTop: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(32),
  },
  tabItem: {
    flex: 1,
    paddingVertical: RFValue(20),
  },
  selectedTab: {
    backgroundColor: palette.emeraldGreen,
    borderRadius: RFValue(16),
  },
});
