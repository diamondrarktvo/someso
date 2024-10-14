import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Overlay } from "@rneui/themed";
import { BoxProps } from "./Box";
import Box from "./Box";
import Text from "./Text";
import { heightPercentageToDP, widthPercentageToDP } from "_utils";
import { useGetTheme } from "_theme";

type Props = {
  isOverlay?: boolean;
  error?: any;
  children: React.ReactNode;
  isLoading: boolean;
} & Partial<BoxProps>;

const Loader: React.FC<Props> = ({
  isOverlay = false,
  error,
  children,
  isLoading,
  ...props
}) => {
  const { colors } = useGetTheme();

  return (
    <>
      {children}
      {isLoading &&
        (isOverlay ? (
          <Overlay
            isVisible
            overlayStyle={styles.overlayContainer}
            animationType="fade"
          >
            <Box
              backgroundColor={"overlayDarkBg"}
              paddingVertical={"m"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              height={heightPercentageToDP(25)}
              width={widthPercentageToDP(60)}
              borderRadius={"lg"}
            >
              <ActivityIndicator size="large" color={colors.primary} />
              <Text color={"offWhite"}>Veuillez patienter un instant ...</Text>
            </Box>
          </Overlay>
        ) : (
          <Box style={styles.loaderContainer}>
            <Box
              backgroundColor={"withoutOverlayDarkBg"}
              paddingVertical={"m"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              height={heightPercentageToDP(25)}
              width={widthPercentageToDP(60)}
              borderRadius={"lg"}
            >
              <ActivityIndicator size="large" color={colors.primary} />
              <Text color={"offWhite"}>Veuillez patienter un instant ...</Text>
            </Box>
          </Box>
        ))}
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  overlayContainer: {
    backgroundColor: "transparent",
    elevation: 0,
  },
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
