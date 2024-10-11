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
                Choisissez un module d'abord
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
                SMS Ana (Santé reproductive)
              </Text>
              <Text variant={"secondary"} color={"grey"}>
                Accédez à des conseils pratiques sur la santé reproductive, la
                contraception, et les services de santé locaux.
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
                SMS Clim (Changement climatique)
              </Text>
              <Text variant={"secondary"} color={"grey"}>
                Suivez des cours sur le changement climatique, comprenez ses
                impacts sur votre environnement, et apprenez comment vous
                adapter à ces changements.
              </Text>
            </Box>
          </Pressable>
        </Box>
      </Scaffold>
    </LinearGradient>
  );
};

export default MainMenuScreen;
