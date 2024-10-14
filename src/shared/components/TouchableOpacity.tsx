import React from "react";
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { BoxProps } from "./Box";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
} & TouchableOpacityProps &
  BoxProps;

const TouchableOpacity = ({ children, onPress }: Props) => {
  return (
    <RNTouchableOpacity activeOpacity={0.8} onPress={onPress}>
      {children}
    </RNTouchableOpacity>
  );
};

export default TouchableOpacity;
