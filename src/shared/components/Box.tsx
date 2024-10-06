import { createBox, BoxProps as RestyleBoxProps } from "@shopify/restyle";
import React from "react";
import { Theme } from "_theme";

const Box = createBox<Theme>();

export type BoxProps = RestyleBoxProps<Theme>;

export default Box;
