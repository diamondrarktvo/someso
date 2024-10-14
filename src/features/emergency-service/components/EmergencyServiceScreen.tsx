import React, { useState } from "react";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { Box, Button, EmptyList, Image, Row, Scaffold, Text } from "_shared";
import { RFValue } from "_utils";
import { ALL_EMERGENCY_SERVICES } from "../data";
import { CardEmergency, CardEmergencyProps } from "./CardEmergency";
import { useNavigation } from "@react-navigation/native";

const EmergencyServiceScreen = () => {
  const [emergencySelected, setEmergencySelected] = useState<number[]>([]);
  const navigation = useNavigation();

  const handlePress = (idEmergency: number) => {
    setEmergencySelected((prevSelected) =>
      prevSelected.includes(idEmergency)
        ? prevSelected.filter((id) => id !== idEmergency)
        : [...prevSelected, idEmergency],
    );
  };

  const renderItem: ListRenderItem<CardEmergencyProps> = ({ item }) => {
    return (
      <CardEmergency
        item={item}
        emergencySelected={emergencySelected}
        handlePress={handlePress}
      />
    );
  };

  return (
    <Scaffold typeOfScreen="stack" paddingBottom={"xxs"}>
      <Box flex={1}>
        <FlashList
          ListHeaderComponent={
            <Box mb={"s"}>
              <Row alignItems={"center"} justifyContent={"center"} mt={"m"}>
                <Image
                  source={require("_images/png-jpg-jpeg/icon-siren.png")}
                  style={{ width: RFValue(120), height: RFValue(120) }}
                />
              </Row>
              <Row
                justifyContent={"center"}
                mt={"s"}
                backgroundColor={"grey"}
                borderRadius={"md"}
                py={"xs"}
                mx={"xl"}
              >
                <Text variant={"primaryBold"}>Type d'urgence</Text>
              </Row>
            </Box>
          }
          keyExtractor={(item, index) => item.id.toString()}
          numColumns={2}
          estimatedItemSize={200}
          data={ALL_EMERGENCY_SERVICES}
          renderItem={renderItem}
          extraData={emergencySelected}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList textToShow="Donnée pas disponible" />}
        />
      </Box>

      {emergencySelected.length > 0 && (
        <Box mt={"s"}>
          <Button
            label={"Suivant"}
            onPress={() => {
              navigation.navigate("map_screen");
            }}
            paddingHorizontal={"l"}
            height={RFValue(45)}
          />
        </Box>
      )}
    </Scaffold>
  );
};

export default EmergencyServiceScreen;
