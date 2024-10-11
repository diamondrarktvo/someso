import React, { useCallback } from "react";
import { Box, Button, Scaffold, STYLES, Text } from "_shared";
import { LinearGradient } from "expo-linear-gradient";
import { palette } from "_theme";
import Woman from "_images/svg/woman-welcome.svg";
import EllipseTop from "_images/svg/semi-ellipse-top.svg";
import EllipseLeft from "_images/svg/semi-ellipse-left.svg";
import { useStartApp } from "../hooks/useStartApp";
import { RFValue } from "_utils";

export default function OnboardingScreen() {
  const { loading, startApp } = useStartApp();

  return (
    <LinearGradient
      style={STYLES.container}
      colors={palette.defaultLinearColor}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Box position={"absolute"} top={0} right={0}>
        <EllipseTop width={RFValue(170)} height={RFValue(170)} />
      </Box>
      <Scaffold
        typeOfScreen="stack"
        backgroundColor={"transparent"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        paddingVertical="s"
        paddingHorizontal={"s"}
      >
        <Box position={"absolute"} top={RFValue(140)} left={RFValue(-20)}>
          <EllipseLeft width={RFValue(170)} height={RFValue(290)} />
        </Box>

        <Woman width={400} height={400} />

        <Box
          style={STYLES.boxShadowContainer}
          borderRadius={"md"}
          backgroundColor={"mainBackground"}
          paddingVertical={"m"}
          paddingHorizontal={"m"}
          flexGrow={0.6}
          justifyContent={"space-around"}
        >
          <Text
            variant={"veryBigTitle"}
            color={"textPrimaryDark"}
            textAlign={"center"}
            px={"m"}
          >
            Bienvenue dans SOMESO !
          </Text>
          <Text
            variant={"secondary"}
            color={"grey"}
            textAlign={"center"}
            px={"m"}
          >
            Recevez des informations, cours vitales sur la santé reproductive et
            des changements climatiques, où que vous soyez. SOMESO est là pour
            vous soutenir dans la gestion de votre santé et vous alerter sur les
            urgences environnementales.
          </Text>
          <Box justifyContent={"center"} alignItems={"center"}>
            <Button
              label={"Get Started"}
              loading={loading}
              onPress={() => startApp()}
              paddingHorizontal={"l"}
            />
          </Box>
        </Box>
      </Scaffold>
    </LinearGradient>
  );
}
