import { Box, Image, Text } from "_shared";
import { RFValue } from "_utils";
import { Pressable } from "react-native";

export interface CardEmergencyProps {
  id: number;
  title: string;
  image: any;
}

interface CardEmergencyComponentProps {
  item: CardEmergencyProps;
  emergencySelected: number[];
  handlePress: (id: number) => void;
}

export const CardEmergency = ({
  item,
  emergencySelected,
  handlePress,
}: CardEmergencyComponentProps) => {
  return (
    <Box
      key={item.id}
      alignItems={"center"}
      flex={1}
      padding="m"
      margin="xs"
      borderRadius="md"
      borderWidth={emergencySelected.includes(item.id) ? 2 : 0}
      borderColor={emergencySelected.includes(item.id) ? "error" : "white"}
      backgroundColor="white"
      shadowColor="black"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      elevation={2}
    >
      <Pressable onPress={() => handlePress(item.id)}>
        <Image
          source={item.image}
          style={{ width: RFValue(60), height: RFValue(60) }}
        />
        <Text variant={"secondaryBold"} textAlign={"center"} mt={"s"}>
          {item.title}
        </Text>
      </Pressable>
    </Box>
  );
};
