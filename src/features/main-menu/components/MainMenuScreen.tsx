import { Scaffold, Text, STYLES, Box, setMenuChoiced } from "_shared";
import { palette } from "_theme";
import { LinearGradient } from "expo-linear-gradient";
import LogoWhite from "_images/svg/logo-white.svg";
import IconHealth from "_images/svg/icon-health.svg";
import IconClimat from "_images/svg/icon-climat.svg";
import {
  ALL_MODULES_FOR_SOMESO,
  heightPercentageToDP,
  ModuleSomesoTypes,
  RFValue,
  widthPercentageToDP,
} from "_utils";
import { mainMenuStyles } from "./styles";
import { ImageBackground, Pressable } from "react-native";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const MainMenuScreen = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const onHandleChoiceModule = useCallback((module: ModuleSomesoTypes) => {
    dispatch(setMenuChoiced(module));
  }, []);

  return (
    <LinearGradient
      style={STYLES.container}
      colors={palette.defaultLinearColor}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Scaffold
        typeOfScreen="stack"
        backgroundColor={"transparent"}
        paddingBottom={"xs"}
      >
        <Box alignItems={"center"}>
          <LogoWhite width={RFValue(200)} height={RFValue(90)} />

          <Box
            height={heightPercentageToDP(28)}
            width={widthPercentageToDP(65)}
            justifyContent={"center"}
            overflow={"hidden"}
          >
            <ImageBackground
              source={require("_images/png-jpg-jpeg/ellipse-gradient.png")}
              style={mainMenuStyles.imageBackground}
              resizeMode="cover"
            >
              <Text
                variant={"titleBold"}
                fontSize={RFValue(56)}
                color={"white"}
                textAlign={"center"}
              >
                {t("menuscreen:bigTitle")}
              </Text>
            </ImageBackground>
          </Box>
        </Box>

        <Box flex={1} justifyContent={"space-between"}>
          <Pressable
            onPress={() => onHandleChoiceModule(ALL_MODULES_FOR_SOMESO.SMS_ANA)}
          >
            <Box
              style={STYLES.boxShadowContainer}
              backgroundColor={"mainBackground"}
              borderRadius={"md"}
              px={"m"}
              py={"s"}
            >
              <IconHealth width={RFValue(102)} height={RFValue(58)} />
              <Text variant={"veryBigTitle"} my={"s"}>
                {t("menuscreen:module.sms_ana.title")}
              </Text>
              <Text variant={"secondary"} color={"grey"}>
                {t("menuscreen:module.sms_ana.description")}
              </Text>
            </Box>
          </Pressable>

          <Pressable
            onPress={() =>
              onHandleChoiceModule(ALL_MODULES_FOR_SOMESO.SMS_CLIM)
            }
          >
            <Box
              style={STYLES.boxShadowContainer}
              backgroundColor={"mainBackground"}
              borderRadius={"md"}
              px={"m"}
              py={"s"}
            >
              <IconClimat width={RFValue(102)} height={RFValue(58)} />
              <Text variant={"veryBigTitle"} my={"s"}>
                {t("menuscreen:module.sms_clim.title")}
              </Text>
              <Text variant={"secondary"} color={"grey"}>
                {t("menuscreen:module.sms_clim.description")}
              </Text>
            </Box>
          </Pressable>
        </Box>
      </Scaffold>
    </LinearGradient>
  );
};

export default MainMenuScreen;
