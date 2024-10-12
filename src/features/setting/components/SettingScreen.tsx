import React, { useState } from "react";
import {
  Scaffold,
  Row,
  Text,
  Box,
  functionnalitySelectors,
  Icon,
  ItemSeparator,
  Switch,
  STYLES,
  Button,
} from "_shared";
import { RFValue, widthPercentageToDP } from "_utils";
import { useSelector } from "react-redux";
import { useGetTheme } from "_theme";
import { settingStyles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { useExitModule } from "../hooks/useExitModule";

const SettingScreen = () => {
  const moduleChoicedByUser = useSelector(functionnalitySelectors.menuChoiced);
  const { colors, sizes } = useGetTheme();
  const [notificationData, setNotificationData] = useState({
    sound: {
      value: 0,
    },
    received: {
      value: 0,
    },
    badge: {
      value: 0,
    },
  });
  const [darkMode, setDarkMode] = useState({ value: 0 });
  const { exitCurrentModule, loading } = useExitModule();
  return (
    <>
      {/**header */}
      <Box
        alignItems={"center"}
        backgroundColor={"primary"}
        borderBottomLeftRadius={"md"}
        borderBottomRightRadius={"md"}
        py={"m"}
      >
        <Text variant={"veryBigTitle"} color={"offWhite"}>
          Paramètre
        </Text>

        <Box alignItems={"center"} width={widthPercentageToDP(55)} mt={"m"}>
          <Text
            variant={"veryBigTitle"}
            fontSize={RFValue(32)}
            color={"offWhite"}
          >
            {moduleChoicedByUser === "sms_ana" ? "SMS Ana" : "SMS Clim"}
          </Text>
          <Text
            variant={"tertiary"}
            textAlign={"center"}
            color={"offWhite"}
            mt={"s"}
          >
            {moduleChoicedByUser === "sms_ana"
              ? "Le module SMS Ana offre des informations sur la santé reproductive, les droits des femmes, et l'éducation sexuelle."
              : "Le module SMS Clim fournit des informations sur le changement climatique, ses impacts et des conseils pour l'adaptation."}{" "}
          </Text>
        </Box>
      </Box>

      <Scaffold typeOfScreen="stack" py={"xxs"} backgroundColor={"offWhite"}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <Box mb={"m"}>
            <Row alignItems={"center"}>
              <Icon
                name={"loyalty"}
                size={sizes.ICON_MEDIUM}
                color={colors.primary}
              />
              <Text variant={"veryBigTitle"} ml={"xs"}>
                Abonnement
              </Text>
            </Row>

            <Box
              backgroundColor={"primary"}
              borderRadius={"md"}
              paddingVertical={"s"}
              paddingHorizontal={"m"}
              mt={"s"}
            >
              <Row justifyContent={"space-between"} alignItems={"center"}>
                <Text variant={"secondary"} color={"offWhite"}>
                  S'abonner
                </Text>
                <Icon
                  name={"chevron-right"}
                  color={colors.offWhite}
                  size={sizes.ICON_MEDIUM}
                />
              </Row>

              <ItemSeparator />

              <Row justifyContent={"space-between"} alignItems={"baseline"}>
                <Text variant={"secondary"} color={"offWhite"}>
                  Date de fin
                </Text>
                <Text variant={"tertiaryBold"} color={"offWhite"}>
                  12/12/2022
                </Text>
              </Row>
            </Box>
          </Box>

          <Box mb={"m"}>
            <Row alignItems={"center"}>
              <Icon
                name={"loyalty"}
                size={sizes.ICON_MEDIUM}
                color={colors.primary}
              />
              <Text variant={"veryBigTitle"} ml={"xs"}>
                Notifications
              </Text>
            </Row>

            <Box
              backgroundColor={"primary"}
              borderRadius={"md"}
              paddingVertical={"s"}
              paddingHorizontal={"m"}
              mt={"s"}
            >
              <Row justifyContent={"space-between"} alignItems={"center"}>
                <Text variant={"secondary"} color={"offWhite"}>
                  Son
                </Text>
                <Switch
                  value={notificationData.sound}
                  onPress={() => {
                    setNotificationData({
                      ...notificationData,
                      sound: {
                        value: notificationData.sound.value === 0 ? 1 : 0,
                      },
                    });
                  }}
                  style={settingStyles.switch}
                  trackColors={{
                    on: colors.tertiary,
                    off: colors.black,
                  }}
                />
              </Row>

              <ItemSeparator />

              <Row justifyContent={"space-between"} alignItems={"baseline"}>
                <Text variant={"secondary"} color={"offWhite"}>
                  Recevoir des notifications
                </Text>
                <Switch
                  value={notificationData.received}
                  onPress={() => {
                    setNotificationData({
                      ...notificationData,
                      received: {
                        value: notificationData.received.value === 0 ? 1 : 0,
                      },
                    });
                  }}
                  style={settingStyles.switch}
                  trackColors={{
                    on: colors.tertiary,
                    off: colors.black,
                  }}
                />
              </Row>

              <ItemSeparator />

              <Row justifyContent={"space-between"} alignItems={"baseline"}>
                <Text variant={"secondary"} color={"offWhite"}>
                  Badge sur l'application
                </Text>
                <Switch
                  value={notificationData.badge}
                  onPress={() => {
                    setNotificationData({
                      ...notificationData,
                      badge: {
                        value: notificationData.badge.value === 0 ? 1 : 0,
                      },
                    });
                  }}
                  style={settingStyles.switch}
                  trackColors={{
                    on: colors.tertiary,
                    off: colors.black,
                  }}
                />
              </Row>
            </Box>
          </Box>

          <Box mb={"m"}>
            <Row alignItems={"center"}>
              <Icon
                name={"loyalty"}
                size={sizes.ICON_MEDIUM}
                color={colors.primary}
              />
              <Text variant={"veryBigTitle"} ml={"xs"}>
                Préferences
              </Text>
            </Row>

            <Box
              backgroundColor={"primary"}
              borderRadius={"md"}
              paddingVertical={"s"}
              paddingHorizontal={"m"}
              mt={"s"}
            >
              <Row justifyContent={"space-between"} alignItems={"center"}>
                <Text variant={"secondary"} color={"offWhite"}>
                  Langue
                </Text>
                <Row alignItems={"center"}>
                  <Text variant={"tertiaryBold"} color={"offWhite"}>
                    Français
                  </Text>
                  <Icon
                    name={"chevron-right"}
                    color={colors.offWhite}
                    size={sizes.ICON_MEDIUM}
                  />
                </Row>
              </Row>

              <ItemSeparator />

              <Row justifyContent={"space-between"} alignItems={"baseline"}>
                <Text variant={"secondary"} color={"offWhite"}>
                  Dark Mode
                </Text>
                <Switch
                  value={darkMode}
                  onPress={() => {
                    setDarkMode((prevState) => {
                      return {
                        value: prevState.value === 0 ? 1 : 0,
                      };
                    });
                  }}
                  style={settingStyles.switch}
                  trackColors={{
                    on: colors.tertiary,
                    off: colors.black,
                  }}
                />
              </Row>
            </Box>
          </Box>

          <Box mb={"m"}>
            <Button
              variant="danger"
              label={"Quitter ce module"}
              loading={loading}
              onPress={() => exitCurrentModule()}
              paddingHorizontal={"l"}
              height={RFValue(45)}
            />
          </Box>
        </ScrollView>
      </Scaffold>
    </>
  );
};

export default SettingScreen;
