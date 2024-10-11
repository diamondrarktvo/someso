import {
  Box,
  EmptyList,
  HeaderNavigation,
  Icon,
  Row,
  Scaffold,
  STYLES,
  Text,
} from "_shared";
import { RFValue } from "_utils";
import { LinearGradient } from "expo-linear-gradient";
import HomeIcon from "_images/svg/home-icon-1.svg";
import { learnStyles } from "./styles";
import { useGetTheme } from "_theme";
import { useState } from "react";
import { Pressable } from "react-native";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { LIST_OF_COURSE } from "../data";
import { RowItemm } from "./RowItem";

const LearnScreen = () => {
  const { colors, sizes } = useGetTheme();
  const [viewMode, setViewMode] = useState<"list" | "description">("list");

  const renderItem: ListRenderItem<any> = ({ item }) => {
    return <RowItemm item={item} />;
  };

  return (
    <Scaffold typeOfScreen="stack" backgroundColor={"white"}>
      <HeaderNavigation title="Community" />

      {/**Banniere box */}
      <Box my={"s"}>
        <LinearGradient
          style={learnStyles.containerBoxTop}
          colors={[
            "rgba(255,216,224,255)",
            "rgba(255,204,211,255)",
            "rgba(254,177,185,255)",
          ]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <HomeIcon height={RFValue(160)} width={RFValue(200)} />
        </LinearGradient>
      </Box>

      {/**Title of content box */}
      <Box>
        <Text variant={"veryBigTitle"}>Figma community</Text>
        <Row>
          <Row alignItems={"center"}>
            <Icon
              name={"star-outline"}
              color={colors.grey}
              size={RFValue(15)}
            />
            <Text variant={"tertiary"} color={"grey"} ml={"s"}>
              4.8
            </Text>
          </Row>

          <Row alignItems={"center"} ml={"xs"}>
            <Icon name={"schedule"} color={colors.grey} size={RFValue(14)} />
            <Text variant={"tertiary"} color={"grey"} ml={"s"}>
              72 heures
            </Text>
          </Row>
        </Row>
      </Box>

      {/**Tab box */}
      <Box
        my={"s"}
        backgroundColor={"offWhite"}
        borderRadius={"md"}
        padding={"xxs"}
        style={STYLES.boxShadowContainer}
      >
        <Row justifyContent={"space-between"}>
          <Pressable
            onPress={() => setViewMode("list")}
            style={[
              viewMode === "list" ? learnStyles.selectedTab : undefined,
              learnStyles.tabItem,
            ]}
          >
            <Text
              variant={"tertiary"}
              textAlign={"center"}
              color={viewMode === "list" ? "white" : "black"}
            >
              Playlist (22)
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setViewMode("description")}
            style={[
              viewMode === "description" ? learnStyles.selectedTab : undefined,
              learnStyles.tabItem,
            ]}
          >
            <Text
              variant={"tertiary"}
              textAlign={"center"}
              color={viewMode === "description" ? "white" : "black"}
            >
              Description
            </Text>
          </Pressable>
        </Row>
      </Box>

      {/**Content box */}
      <Box px={"xs"} flex={1}>
        <FlashList
          keyExtractor={(item, index) => item.id.toString()}
          estimatedItemSize={200}
          data={LIST_OF_COURSE}
          renderItem={renderItem}
          extraData={LIST_OF_COURSE}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyList textToShow="Pas de cours disponible" />
          }
        />
      </Box>

      {/* Footer box */}
      <Row justifyContent={"space-between"}>
        <Box flex={0.5}>
          <Icon name={"home"} color={colors.primary} size={sizes.ICON_MEDIUM} />
        </Box>

        <Box flex={1}>
          <Text variant={"primaryBold"} textAlign={"center"}>
            Enroll now
          </Text>
        </Box>
      </Row>
    </Scaffold>
  );
};

export default LearnScreen;
