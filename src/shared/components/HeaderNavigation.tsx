import { useGetTheme } from "_theme";
import Icon from "./Icon";
import Row from "./Row";
import Text from "./Text";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFValue, widthPercentageToDP } from "_utils";

type HeaderNavigationProps = {
  title: string;
  iconLeft?: string;
  onPressIconLeft?: () => void;
};

const HeaderNavigation = ({
  title,
  iconLeft,
  onPressIconLeft,
}: HeaderNavigationProps) => {
  const { colors, sizes } = useGetTheme();
  const navigation = useNavigation();
  const onPress = () => {
    if (!onPressIconLeft) {
      return navigation.goBack();
    }
    onPressIconLeft();
  };
  return (
    <Row
      justifyContent={"space-between"}
      alignItems={"center"}
      width={widthPercentageToDP(55)}
    >
      <Pressable onPress={onPress}>
        <Icon
          name={iconLeft ?? "arrow-back"}
          color={colors.black}
          size={sizes.ICON_MEDIUM}
        />
      </Pressable>
      <Text variant={"titleBold"} fontSize={RFValue(24)}>
        {title}
      </Text>
    </Row>
  );
};

export default HeaderNavigation;
