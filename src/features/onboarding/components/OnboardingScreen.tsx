import React, { useCallback } from "react";
import {
  Box,
  Button,
  Scaffold,
  setUserShowOnboardingScreen,
  STYLES,
  Text,
} from "_shared";
import { LinearGradient } from "expo-linear-gradient";
import { palette } from "_theme";
import WomanSVG from "_images/woman-welcome.svg";
import { onBoardingStyles } from "./styles";
import { useStartApp } from "../hooks/useStartApp";

export default function OnboardingScreen() {
  const { loading, startApp } = useStartApp();

  return (
    <LinearGradient
      style={STYLES.container}
      colors={palette.linearColor}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Scaffold
        typeOfScreen="stack"
        backgroundColor={"transparent"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        paddingVertical="s"
        paddingHorizontal={"s"}
      >
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
