import { Box, Icon, ItemT, Row, SectionT, Text } from "_shared";
import IconPlayerDone from "_images/svg/icon-player-done.svg";
import IconPlayer from "_images/svg/icon-player.svg";
import IconDone from "_images/svg/icon-done.svg";
import IconLock from "_images/svg/icon-lock.svg";

import { RFValue } from "_utils";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "src/navigations/Types";

type RowItemProps = (SectionT | ItemT) & {
  iconLeft: "player" | "listNumber";
  alreadyListen?: boolean;
  duration: string;
  alreadyRead?: boolean;
};

export type LearnScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "learn_screen"
>;

export const RowItem = ({
  item,
  index,
}: {
  item: RowItemProps;
  index: number;
}) => {
  const navigation = useNavigation<LearnScreenNavigationProp>();

  function isItemT(item: SectionT | ItemT): item is ItemT {
    return (item as ItemT).options !== undefined;
  }

  const onHandlePressItem = () => {
    if (isItemT(item) && item.options && item.options.length > 0) {
      return navigation.push("learn_screen", {
        id: item.id,
        title: item.title,
        options: item.options,
        svgImage: index,
      });
    }
    navigation.navigate("reading_screen", {
      titleOfCourse: item.title,
    });
  };

  return (
    <Row
      alignItems={"center"}
      justifyContent={"space-between"}
      my={"xs"}
      width={"100%"}
    >
      {item.iconLeft === "listNumber" ? (
        <Box
          backgroundColor={"blue"}
          paddingHorizontal={"s"}
          paddingVertical={"xs"}
          borderRadius={"hg"}
        >
          <Text variant={"veryBigTitle"} color={"white"}>
            {index + 1}
          </Text>
        </Box>
      ) : item.alreadyListen ? (
        <IconPlayerDone height={RFValue(30)} width={RFValue(30)} />
      ) : (
        <IconPlayer height={RFValue(30)} width={RFValue(30)} />
      )}
      <Box flex={1} ml={"xs"}>
        <Pressable onPress={onHandlePressItem}>
          <Text
            variant={"secondaryBold"}
            numberOfLines={1}
            style={{
              width: "95%",
            }}
          >
            {item.title}
          </Text>
          <Text variant={"tertiary"} color={"grey"}>
            {item.duration}
          </Text>
        </Pressable>
      </Box>

      <Pressable onPress={onHandlePressItem}>
        {item.alreadyRead ? (
          <IconDone height={RFValue(24)} width={RFValue(24)} />
        ) : (
          <IconLock height={RFValue(24)} width={RFValue(24)} />
        )}
      </Pressable>
    </Row>
  );
};
