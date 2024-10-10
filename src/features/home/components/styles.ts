import { RFValue } from "_utils";
import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  containerBoxTop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(24),
    paddingBottom: RFValue(16),
    paddingTop: RFValue(48),
    borderRadius: RFValue(32),
  },
  boxIconNotification: {
    backgroundColor: "rgba(255, 255, 255, 0.28)",
  },
  inputSearch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: RFValue(8),
    fontSize: RFValue(14),
  },
});
