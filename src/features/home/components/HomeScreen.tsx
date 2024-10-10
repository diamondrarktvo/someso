import { Scaffold, Row, Text, Box, Icon, Column, EmptyList } from "_shared";
import { heightPercentageToDP, RFValue, widthPercentageToDP } from "_utils";
import { LinearGradient } from "expo-linear-gradient";
import { homeStyles } from "./styles";
import { palette, useGetTheme } from "_theme";
import SearchInput from "./CustomInputSearch";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { CardItem } from "./CardItem";
import { HOME_DATA } from "../data";

const HomeScreen = () => {
  const { colors, sizes } = useGetTheme();

  const renderItem: ListRenderItem<any> = ({ item }) => {
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
                Hello,
              </Text>
              <Text variant={"secondary"} color={"offWhite"}>
                Good Morning
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
                size={RFValue(20)}
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
            data={HOME_DATA}
            renderItem={renderItem}
            extraData={HOME_DATA}
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
