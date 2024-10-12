import { RFValue } from "_utils";
import Box from "./Box";
import { Theme } from "_theme";

type Props = {
  lineColor?: keyof Theme["colors"];
  spacingVertical?: keyof Theme["spacing"];
};

const ItemSeparator = ({ lineColor, spacingVertical }: Props) => (
  <Box
    height={RFValue(1)}
    backgroundColor={lineColor ?? "white"}
    my={spacingVertical ?? "s"}
  />
);

export default ItemSeparator;
