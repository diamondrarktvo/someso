import { Box, Column, Text } from "_shared";

interface CardItemProps {
  id: number;
  title: string;
  subTitle: string;
  svgImage: JSX.Element;
}

export const CardItem = ({ item }: { item: CardItemProps }) => {
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
      <Box alignItems="center" justifyContent="center">
        {item.svgImage}
      </Box>

      <Column mt={"m"}>
        <Text variant={"primaryBold"}>{item.title}</Text>
        <Text variant={"tertiary"} color={"grey"}>
          {item.subTitle}
        </Text>
      </Column>
    </Box>
  );
};
