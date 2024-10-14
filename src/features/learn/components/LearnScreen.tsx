import {
  Box,
  EmptyList,
  HeaderNavigation,
  Icon,
  ItemT,
  RenderRandomImageDynamic,
  Row,
  Scaffold,
  SectionT,
  STYLES,
  Text,
} from "_shared";
import { RFValue } from "_utils";
import { LinearGradient } from "expo-linear-gradient";
import IconShare from "_images/svg/icon-share.svg";

import { useGetTheme } from "_theme";
import { useMemo, useState } from "react";
import { Pressable } from "react-native";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { LearnScreenNavigationProp, RowItem } from "./RowItem";
import { learnStyles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

interface SectionCustomT extends SectionT {
  svgImage: number;
}

interface ItemCustomT extends ItemT {
  svgImage: number;
}

const LearnScreen = () => {
  const { colors, sizes } = useGetTheme();
  const [viewMode, setViewMode] = useState<"list" | "description">("list");
  const dataToShow = useData<SectionCustomT | ItemCustomT>();
  const navigation = useNavigation<LearnScreenNavigationProp>();

  const labelDynamic = useMemo(() => {
    if (dataToShow) {
      if (
        "items" in dataToShow &&
        dataToShow.items &&
        Array.isArray(dataToShow.items) &&
        dataToShow.items.length > 0
      ) {
        return {
          typeOfData: "section",
          navTitle: "Thème",
          tabTitle: `Leçons (${
            Array.isArray(dataToShow.items) ? dataToShow.items.length : 0
          })`,
        };
      }

      if (
        "options" in dataToShow &&
        dataToShow.options &&
        dataToShow.options.length > 0
      ) {
        return {
          typeOfData: "item",
          navTitle: "Leçon",
          tabTitle: `Chapitres (${dataToShow.options?.length})`,
        };
      }
    }

    return {
      typeOfData: "section",
      navTitle: "Thème",
      tabTitle: "Leçons",
    };
  }, [dataToShow]);

  function useData<T extends SectionCustomT | ItemCustomT>() {
    const dataFromParams = useRoute().params as T | null;

    const dataToShow = useMemo(() => {
      if (!dataFromParams) return null;

      if (
        "items" in dataFromParams &&
        dataFromParams.items &&
        dataFromParams.items.length > 0
      ) {
        return dataFromParams as SectionCustomT;
      }

      if (
        "options" in dataFromParams &&
        dataFromParams.options &&
        dataFromParams.options.length > 0
      ) {
        return dataFromParams as ItemCustomT;
      }

      return null;
    }, [dataFromParams]);

    return dataToShow;
  }

  function isSectionCustomT(
    data: SectionCustomT | ItemCustomT,
  ): data is SectionCustomT {
    return (
      (data as SectionCustomT).items !== undefined &&
      ((data as SectionCustomT).options === undefined ||
        (data as SectionCustomT).options?.length === 0)
    );
  }

  function formatDataToShow(data: SectionCustomT | ItemCustomT) {
    if (isSectionCustomT(data)) {
      return data.items?.map((item) => ({
        ...item,
        iconLeft: "listNumber",
        alreadyRead: Math.random() >= 0.5,
        duration: "20 min",
      }));
    }

    return (
      data.options?.map((option, index) => ({
        id: `${data.id}-${index}`,
        title: option,
        iconLeft: "player",
        alreadyListen: Math.random() >= 0.5,
        alreadyRead: Math.random() >= 0.5,
        duration: "5 min 20 sec",
      })) ?? []
    );
  }

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return <RowItem item={item} index={dataToShow?.svgImage ?? 0} />;
  };

  return (
    <Scaffold
      typeOfScreen="stack"
      backgroundColor={"white"}
      paddingBottom={"xs"}
    >
      <HeaderNavigation
        title={labelDynamic.navTitle}
        onPressIconLeft={() => {
          if (labelDynamic.typeOfData === "section") {
            navigation.popToTop();
          } else if (labelDynamic.typeOfData === "item") {
            navigation.goBack();
          }
        }}
      />

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
          <RenderRandomImageDynamic
            index={dataToShow?.svgImage ?? 0}
            height={RFValue(120)}
            width={RFValue(150)}
          />
        </LinearGradient>
      </Box>

      {/**Title of content box */}
      <Box>
        <Text
          variant={"veryBigTitle"}
          numberOfLines={1}
          style={{
            width: "95%",
          }}
        >
          {dataToShow?.title}
        </Text>
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
              1 heure
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
              {labelDynamic.tabTitle}
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
          data={dataToShow ? formatDataToShow(dataToShow) : []}
          renderItem={renderItem}
          extraData={dataToShow ? formatDataToShow(dataToShow) : []}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList textToShow="Donnée pas disponible" />}
        />
      </Box>

      {/* Footer box */}
      <Row justifyContent={"space-between"}>
        <Box
          flex={0.15}
          backgroundColor={"tertiary"}
          alignItems={"center"}
          style={{
            borderRadius: RFValue(8),
          }}
          padding={"xxs"}
          marginRight={"xxs"}
        >
          <IconShare height={RFValue(25)} width={RFValue(25)} />
        </Box>

        <Box
          flex={0.85}
          backgroundColor={"primary"}
          justifyContent={"center"}
          style={{
            borderRadius: RFValue(8),
          }}
          marginLeft={"xxs"}
        >
          <Text variant={"primaryBold"} textAlign={"center"} color={"white"}>
            Commencer
          </Text>
        </Box>
      </Row>
    </Scaffold>
  );
};

export default LearnScreen;
