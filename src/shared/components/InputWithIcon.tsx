import { TextInput, TextInputProps } from "react-native";
import React from "react";
import Row from "./Row";
import Text from "./Text";
import Icon from "./Icon";
import TouchableOpacity from "./TouchableOpacity";
import { Theme } from "_theme";
import { useTheme } from "@shopify/restyle";
import { RFValue } from "_utils";

type InputProps = TextInputProps & {
  iconRight?: {
    name: string;
    color: string;
    size: number;
    onPress?: () => void;
  };
  iconLeft?: {
    name: string;
    color: string;
    size: number;
  };
  errorMessage?: string;
};

const InputWithIcon = ({
  iconRight,
  iconLeft,
  errorMessage,
  ...props
}: InputProps) => {
  const theme = useTheme<Theme>();
  const { spacing, colors } = theme;

  return (
    <>
      <Row
        borderWidth={1}
        borderColor="primary"
        width={"auto"}
        borderRadius="sm"
        paddingHorizontal={iconLeft ? "s" : "xs"}
        paddingVertical="s"
        marginVertical="xs"
        backgroundColor={"mainBackground"}
        alignItems="center"
      >
        {iconLeft && (
          <Icon
            name={iconLeft.name}
            size={iconLeft.size}
            color={iconLeft.color}
          />
        )}
        <Row flex={1} justifyContent="space-evenly">
          <TextInput
            {...props}
            style={{
              width: iconRight ? "90%" : "100%",
              marginLeft: iconLeft ? RFValue(16) : 0,
              color: colors.black,
            }}
          />
          {iconRight && (
            <TouchableOpacity onPress={iconRight.onPress}>
              <Icon
                name={iconRight.name}
                size={iconRight.size}
                color={iconRight.color}
              />
            </TouchableOpacity>
          )}
        </Row>
      </Row>
      {errorMessage ? (
        <Text variant={"tertiary"} color="error">
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
};

export default InputWithIcon;
