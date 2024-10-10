import { Input as RNEInput, InputProps } from "@rneui/themed";
import React from "react";
import Box from "./Box";

type Props = InputProps & {
  width?: number;
};

const Input = ({ width, ...props }: Props) => {
  return (
    <Box width={width}>
      <RNEInput {...props} />
    </Box>
  );
};

export default Input;
