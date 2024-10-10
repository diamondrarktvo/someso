import React, { useCallback } from "react";
import { Box, Button, Scaffold, STYLES, Text } from "_shared";
import { LinearGradient } from "expo-linear-gradient";
import { palette } from "_theme";
import WomanSVG from "_images/svg/woman-welcome.svg";
import EllipseTop from "_images/svg/semi-ellipse-top.svg";
import EllipseLeft from "_images/svg/semi-ellipse-left.svg";
import { onBoardingStyles } from "./styles";
import { useStartApp } from "../hooks/useStartApp";
import { RFValue } from "_utils";

export default function OnboardingScreen() {
  const { loading, startApp } = useStartApp();

  return (
    <LinearGradient
      style={STYLES.container}
      colors={palette.linearColor}
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

        <WomanSVG width={400} height={400} />

        <Box
          style={onBoardingStyles.boxShadowContainer}
          borderRadius={"md"}
          backgroundColor={"mainBackground"}
          paddingVertical={"m"}
          paddingHorizontal={"m"}
          flexGrow={0.5}
          justifyContent={"space-around"}
        >
          <Text
            variant={"veryBigTitle"}
            color={"textPrimaryDark"}
            textAlign={"center"}
            px={"m"}
          >
            Figma community boolean variant ipsum arrange union!
          </Text>
          <Text
            variant={"secondary"}
            color={"grey"}
            textAlign={"center"}
            px={"l"}
          >
            Figma community boolean variant ipsum arrange union list
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
