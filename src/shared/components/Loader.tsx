import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Overlay } from "@rneui/themed";
import { BoxProps } from "./Box";
import Box from "./Box";
import Text from "./Text";
import { heightPercentageToDP, widthPercentageToDP } from "_utils";
import { useGetTheme } from "_theme";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import Button from "./Button";
import Row from "./Row";
import { useTranslation } from "react-i18next";

type Props = {
  isOverlay?: boolean;
  error?: FetchBaseQueryError | SerializedError | string | undefined;
  children: React.ReactNode;
  isLoading: boolean;
  retry?: () => void;
} & Partial<BoxProps>;

const Loader: React.FC<Props> = ({
  isOverlay = false,
  error,
  children,
  isLoading,
  retry,
  ...props
}) => {
  const { colors, borderRadii } = useGetTheme();
  const { t } = useTranslation(["common"]);

  return (
    <>
      {children}
      {error ? (
        <Overlay
          isVisible
          overlayStyle={[
            styles.errorOverlay,
            {
              backgroundColor: colors.mainBackground,
              borderRadius: borderRadii.lg,
            },
          ]}
          animationType="fade"
        >
          <Box
            padding={"s"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={heightPercentageToDP(20)}
            width={widthPercentageToDP(70)}
            borderRadius={"lg"}
          >
            <Text variant={"primary"} color={"black"}>
              {JSON.stringify(error) || "An error occurred"}
            </Text>
          </Box>
          <Row justifyContent={"center"}>
            <Button
              variant="danger"
              label={t("actions.cancel")}
              onPress={() => {}}
              marginRight={"xs"}
            />
            {retry && (
              <Button
                variant="primary"
                label={t("actions.retry")}
                onPress={() => retry()}
                marginLeft={"xs"}
              />
            )}
          </Row>
        </Overlay>
      ) : (
        isLoading &&
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
              <Text color={"offWhite"}>{t("label.loading_title")}</Text>
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
              <Text color={"offWhite"}>{t("label.loading_title")}</Text>
            </Box>
          </Box>
        ))
      )}
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
  errorOverlay: {
    elevation: 5,
  },
});