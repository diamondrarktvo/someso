import {
  Scaffold,
  Row,
  Text,
  Box,
  Icon,
  Column,
  EmptyList,
  moduleSelectors,
  SectionT,
  functionnalitySelectors,
} from "_shared";
import { heightPercentageToDP, RFValue } from "_utils";
import { LinearGradient } from "expo-linear-gradient";
import { homeStyles } from "./styles";
import { palette, useGetTheme } from "_theme";
import SearchInput from "./CustomInputSearch";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { CardItem, CardItemProps } from "./CardItem";
import { useSelector } from "react-redux";
import HomeIcon1 from "_images/svg/home-icon-1.svg";
import HomeIcon2 from "_images/svg/home-icon-2.svg";
import HomeIcon3 from "_images/svg/home-icon-3.svg";
import HomeIcon4 from "_images/svg/home-icon-4.svg";
import React from "react";

const iconsMap = [HomeIcon1, HomeIcon2, HomeIcon3, HomeIcon4];

const HomeScreen = () => {
  const { colors, sizes } = useGetTheme();
  const sectionSelectors = useSelector(moduleSelectors.selectSections);
  const sectionList = sectionSelectors.map((section, index) => ({
    id: section.id,
    title: section.title,
    subTitle: `${section.items?.length ?? 0} cours`,
    svgImage: React.createElement(iconsMap[index % iconsMap.length], {
      height: RFValue(110),
      width: RFValue(110),
    }),
  }));
  const moduleChoicedByUser = useSelector(functionnalitySelectors.menuChoiced);

  const renderItem: ListRenderItem<CardItemProps> = ({ item }) => {
    return <CardItem item={item} />;
  };

  return (
    <Scaffold
      typeOfScreen="tab"
      paddingVertical={"xs"}
      paddingHorizontal={"xs"}
    >
      <Box height={heightPercentageToDP(28)}>
        <LinearGradient
          style={homeStyles.containerBoxTop}
          colors={palette.linearColorHomeBaniere}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Row justifyContent={"space-between"} alignItems={"center"}>
            <Box>
              <Text
                variant={"veryBigTitle"}
                fontSize={RFValue(28)}
                color={"offWhite"}
              >
                Bonjour,
              </Text>
              <Text variant={"secondary"} color={"offWhite"}>
                Module sms{moduleChoicedByUser === "sms_ana" ? "ana" : "clim"}
              </Text>
            </Box>
            <Box
              p={"xs"}
              style={homeStyles.boxIconNotification}
              borderRadius={"hg"}
            >
              <Icon
                name={"notifications"}
                color={colors.offWhite}
                size={sizes.ICON_MEDIUM}
              />
            </Box>
          </Row>
          <Box alignItems={"center"}>
            <SearchInput />
          </Box>
        </LinearGradient>
      </Box>

      <Box px={"s"} mt={"m"} flex={1}>
        <Row alignItems={"center"} justifyContent={"space-between"}>
          <Text variant={"veryBigTitle"}>Figma community</Text>
          <Text variant={"secondaryBold"} color={"primary"}>
            See all
          </Text>
        </Row>

        <Box flex={1} mt={"s"}>
          <FlashList
            keyExtractor={(item, index) => item.id.toString()}
            numColumns={2}
            estimatedItemSize={200}
            data={sectionList}
            renderItem={renderItem}
            extraData={sectionList}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <EmptyList textToShow="Pas de cours disponible" />
            }
          />
        </Box>
      </Box>
    </Scaffold>
  );
};

export default HomeScreen;
