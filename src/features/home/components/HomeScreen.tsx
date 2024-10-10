import { backgroundColor } from "@shopify/restyle";
import { Scaffold, Row, Text, Box, Icon, Input } from "_shared";
import { heightPercentageToDP, RFValue } from "_utils";
import { LinearGradient } from "expo-linear-gradient";
import { homeStyles } from "./styles";
import { palette, useGetTheme } from "_theme";
import SearchInput from "./CustomInputSearch";

const HomeScreen = () => {
  const { colors } = useGetTheme();

  return (
    <Scaffold typeOfScreen="tab" paddingTop={"xs"} paddingHorizontal={"xs"}>
      <Box height={heightPercentageToDP(28)}>
        <LinearGradient
          style={homeStyles.containerBoxTop}
          colors={["rgba(79, 195, 247, 0.8)", "rgba(0, 176, 255, 0.9)"]}
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
    </Scaffold>
  );
};

export default HomeScreen;
