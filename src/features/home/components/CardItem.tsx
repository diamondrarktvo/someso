import { useNavigation } from "@react-navigation/native";
import { Box, Column, Text } from "_shared";
import { Pressable } from "react-native";

export interface CardItemProps {
  id: string;
  title: string;
  subTitle: string;
  svgImage: JSX.Element;
}

export const CardItem = ({ item }: { item: CardItemProps }) => {
  const navigation = useNavigation();

  return (
    <Box
      key={item.id}
      flex={1}
      padding="m"
      margin="xs"
      borderRadius="md"
      backgroundColor="white"
      shadowColor="black"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      elevation={2}
    >
      <Pressable onPress={() => navigation.navigate("learn_screen")}>
        <Box alignItems="center" justifyContent="center">
          {item.svgImage}
        </Box>

        <Column mt={"m"}>
          <Text
            variant={"primaryBold"}
            numberOfLines={1}
            style={{ width: "100%" }}
          >
            {item.title}
          </Text>
          <Text variant={"tertiary"} color={"grey"}>
            {item.subTitle}
          </Text>
        </Column>
      </Pressable>
    </Box>
  );
};
