import { Scaffold, Text, STYLES, Box, setMenuChoiced } from "_shared";
import { palette } from "_theme";
import { LinearGradient } from "expo-linear-gradient";
import LogoWhiteSVG from "_images/svg/logo-white.svg";
import IconHealthSVG from "_images/svg/icon-health.svg";
import IconClimatSVG from "_images/svg/icon-climat.svg";
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

const MainMenuScreen = () => {
  const dispatch = useDispatch();
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
          <LogoWhiteSVG width={RFValue(200)} height={RFValue(90)} />

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
                Figma community boolean
              </Text>
            </ImageBackground>
          </Box>
        </Box>

        <Box flex={1} justifyContent={"space-between"}>
          <Pressable
            onPress={() => onHandleChoiceModule(ALL_MODULES_FOR_SOMESO.SMS_ANA)}
          >
            <Box
              style={mainMenuStyles.boxShadowContainer}
              backgroundColor={"mainBackground"}
              borderRadius={"md"}
              px={"m"}
              py={"s"}
            >
              <IconHealthSVG width={RFValue(102)} height={RFValue(77)} />
              <Text variant={"veryBigTitle"} my={"s"}>
                Figma community
              </Text>
              <Text variant={"secondary"} color={"grey"}>
                Figma community boolean variant ipsum arrange union list
              </Text>
            </Box>
          </Pressable>

          <Pressable
            onPress={() =>
              onHandleChoiceModule(ALL_MODULES_FOR_SOMESO.SMS_CLIM)
            }
          >
            <Box
              style={mainMenuStyles.boxShadowContainer}
              backgroundColor={"mainBackground"}
              borderRadius={"md"}
              px={"m"}
              py={"s"}
            >
              <IconClimatSVG width={RFValue(102)} height={RFValue(77)} />
              <Text variant={"veryBigTitle"} my={"s"}>
                Figma community
              </Text>
              <Text variant={"secondary"} color={"grey"}>
                Figma community boolean variant ipsum arrange union list
              </Text>
            </Box>
          </Pressable>
        </Box>
      </Scaffold>
    </LinearGradient>
  );
};

export default MainMenuScreen;
