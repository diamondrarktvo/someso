import React, { useMemo, useState } from "react";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import {
  Box,
  Button,
  EmptyList,
  functionnalitySelectors,
  Image,
  Row,
  Scaffold,
  Text,
} from "_shared";
import { RFValue } from "_utils";
import { ALL_EMERGENCY_SERVICES } from "../data";
import { CardEmergency, CardEmergencyProps } from "./CardEmergency";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { EmergencsI } from "../types";

const EmergencyServiceScreen = () => {
  const [emergencySelected, setEmergencySelected] = useState<{
    id: number;
    icon_emergency: string;
  } | null>(null);
  const moduleChoicedByUser = useSelector(functionnalitySelectors.menuChoiced);
  const navigation = useNavigation();

  const emergencyDataRelativeToModuleChoiced = useMemo(() => {
    return ALL_EMERGENCY_SERVICES.filter(
      (emergency: EmergencsI) => emergency.module === moduleChoicedByUser,
    );
  }, [moduleChoicedByUser]);

  const handlePress = (idEmergency: number, icon_emergency: string) => {
    if (idEmergency && icon_emergency) {
      setEmergencySelected({ id: idEmergency, icon_emergency });
    }
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
          data={emergencyDataRelativeToModuleChoiced}
          renderItem={renderItem}
          extraData={emergencySelected}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList textToShow="Donnée pas disponible" />}
        />
      </Box>

      {emergencySelected && emergencySelected.icon_emergency && (
        <Box mt={"s"}>
          <Button
            label={"Suivant"}
            onPress={() => {
              navigation.navigate("map_screen", {
                icon_emergency: emergencySelected.icon_emergency,
              });
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
