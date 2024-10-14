import { useNavigation } from "@react-navigation/native";
import { Box, Column, ItemT, RenderRandomImageDynamic, Text } from "_shared";
import { Pressable } from "react-native";

export interface CardItemProps {
  id: string;
  title: string;
  items: ItemT[];
  options?: string[];
  svgImage: number;
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
      <Pressable onPress={() => navigation.navigate("learn_screen", item)}>
        <Box alignItems="center" justifyContent="center">
          <RenderRandomImageDynamic index={item.svgImage} />
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
            {item.options && item.options?.length > 0
              ? item.options?.length
              : item.items.length}{" "}
            leçons
          </Text>
        </Column>
      </Pressable>
    </Box>
  );
};
