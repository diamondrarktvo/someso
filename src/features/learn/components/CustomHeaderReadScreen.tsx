import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Icon, Row, STYLES, Text, TouchableOpacity } from "_shared";
import { useGetTheme } from "_theme";
import { RFValue, widthPercentageToDP } from "_utils";
import { Pressable } from "react-native";

interface CustomHeaderReadScreenProps {
  onPressRightButton?: () => void;
}

export const CustomHeaderReadScreen = ({
  onPressRightButton,
}: CustomHeaderReadScreenProps) => {
  const { colors, sizes } = useGetTheme();
  const navigation = useNavigation();

  return (
    <>
      <Row justifyContent={"space-around"} pt={"xs"} pb={"s"}>
        <Pressable onPress={() => navigation.goBack()}>
          <Box
            width={widthPercentageToDP(35)}
            flexDirection={"row"}
            backgroundColor={"primary"}
            justifyContent={"center"}
            style={STYLES.boxShadowContainer}
            alignItems={"center"}
            p={"s"}
            borderRadius={"md"}
          >
            <Icon
              name="arrow-back"
              color={colors.white}
              size={sizes.ICON_MEDIUM}
            />

            <Text
              variant={"tertiaryBold"}
              color={"white"}
              numberOfLines={1}
              style={{ width: RFValue(60) }}
              pl={"xs"}
            >
              Liste des cours
            </Text>
          </Box>
        </Pressable>

        <TouchableOpacity onPress={onPressRightButton}>
          <Box
            width={widthPercentageToDP(35)}
            flexDirection={"row"}
            style={STYLES.boxShadowContainer}
            backgroundColor={"primary"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            p={"s"}
            borderRadius={"md"}
          >
            <Text variant={"primaryBold"} color={"white"} numberOfLines={1}>
              Aa
            </Text>
            <Icon
              name="headphones"
              color={colors.white}
              size={sizes.ICON_MEDIUM}
            />
            <Icon
              name="more-vert"
              color={colors.white}
              size={sizes.ICON_MEDIUM}
            />
          </Box>
        </TouchableOpacity>
      </Row>
    </>
  );
};
