import {
  Box,
  Button,
  functionnalitySelectors,
  Icon,
  Row,
  Scaffold,
  Switch,
  Text,
} from "_shared";
import { ScrollView } from "react-native-gesture-handler";
import { CustomHeaderReadScreen } from "./CustomHeaderReadScreen";
import { RFValue } from "_utils";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useMemo, useRef, useState } from "react";

import { Slider } from "@rneui/themed";
import { useGetTheme } from "_theme";
import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import { learnStyles } from "./styles";
import { useSharedValue } from "react-native-reanimated";

const ReadingContentScreen = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { colors } = useGetTheme();
  const moduleChoicedByUser = useSelector(functionnalitySelectors.menuChoiced);

  const snapPoints = useMemo(() => [1, "40%"], []);
  const [fontSizeDynamic, setFontSizeDynamic] = useState(0);
  const [fontFamilyChoiced, setFontFamilyChoiced] = useState<
    "default" | "serif" | "mono"
  >("default");
  const [themeChoiced, setThemeChoiced] = useState<{
    label: "dark" | "light";
    value: 1 | 0;
  }>({
    label: "light",
    value: 0,
  });

  const openBottomSheet = () => {
    if (bottomSheetRef !== null && bottomSheetRef.current !== null) {
      return bottomSheetRef.current.present();
    }
    return;
  };

  const closeBottomSheet = () => {
    if (bottomSheetRef !== null && bottomSheetRef.current !== null) {
      return bottomSheetRef.current.dismiss();
    }
    return;
  };

  console.log("themeChoiced.value", themeChoiced.value);
  const renderBackdrop = React.useCallback(
    (props: any) => <BottomSheetBackdrop {...props} />,
    [],
  );

  return (
    <Scaffold typeOfScreen="stack" paddingVertical={"s"}>
      <CustomHeaderReadScreen onPressRightButton={openBottomSheet} />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Box mt={"m"} paddingHorizontal={"s"}>
          <Text variant={"secondaryBold"} color={"grey"}>
            Chapitre 1
          </Text>
          <Text variant={"titleBold"} fontSize={RFValue(28)} mt={"s"}>
            Reproduction sexuelle
          </Text>

          <Text variant={"primary"} mt={"m"} lineHeight={RFValue(24)}>
            La santé sexuelle de la femme est un aspect essentiel de son
            bien-être général, englobant non seulement la capacité à avoir des
            relations sexuelles satisfaisantes et sûres, mais aussi le droit de
            faire des choix éclairés concernant sa sexualité. Il est important
            de reconnaître que chaque femme a le droit de décider de son corps,
            sans coercition ni violence. La santé sexuelle est influencée par
            divers facteurs physiques, émotionnels, sociaux et culturels. Une
            communication ouverte et honnête entre partenaires, ainsi que
            l'accès à des services de santé adéquats, sont des éléments clés
            pour promouvoir une sexualité épanouie. Les changements hormonaux
            qui surviennent tout au long de la vie d'une femme, de la puberté à
            la ménopause, ont un impact significatif sur sa santé sexuelle. Ces
            fluctuations peuvent affecter le désir sexuel, la lubrification
            vaginale et la capacité à ressentir du plaisir. Il est essentiel que
            les femmes aient accès à des informations sur la gestion de ces
            changements et qu'elles se sentent à l'aise de discuter de leurs
            préoccupations avec des professionnels de santé. La contraception,
            par exemple, joue un rôle crucial dans la planification familiale,
            permettant aux femmes de choisir quand et si elles souhaitent avoir
            des enfants. La prévention des infections sexuellement
            transmissibles (IST) est également une composante fondamentale de la
            santé sexuelle. Les femmes sont souvent plus vulnérables aux IST en
            raison de facteurs biologiques et sociaux. Il est donc important de
            promouvoir des pratiques sexuelles sûres, y compris l'utilisation
            régulière de préservatifs et la réalisation de dépistages réguliers.
            L'accès à des traitements rapides et efficaces est tout aussi
            crucial pour éviter les complications à long terme. Enfin, la santé
            sexuelle des femmes ne se limite pas à l'absence de maladies ou de
            troubles, mais englobe aussi leur bien-être émotionnel et mental.
            Les attentes sociales et les stigmates liés à la sexualité féminine
            peuvent générer de l'anxiété et du stress. Il est nécessaire de
            créer un environnement dans lequel les femmes se sentent soutenues,
            respectées et libres d'exprimer leurs besoins et leurs désirs. La
            santé sexuelle est une question de droits, de dignité et de respect
            pour chaque femme, à chaque étape de sa vie.
          </Text>
        </Box>
      </ScrollView>

      <BottomSheetModal
        backdropComponent={renderBackdrop}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        style={learnStyles.bottomSheetContainer}
      >
        <Box>
          <Text variant={"tertiaryBold"} color={"grey"}>
            Taille{" "}
          </Text>
          <Row alignItems={"center"} justifyContent={"space-between"}>
            <Text variant={"secondaryBold"}>Aa</Text>
            <Slider
              value={fontSizeDynamic}
              style={{
                flex: 0.9,
              }}
              onValueChange={setFontSizeDynamic}
              maximumValue={10}
              minimumValue={0}
              step={1}
              allowTouchTrack
              trackStyle={{ height: 5, backgroundColor: "transparent" }}
              thumbStyle={{
                height: 20,
                width: 20,
                backgroundColor: "transparent",
              }}
              thumbProps={{
                children: (
                  <Icon
                    name={
                      moduleChoicedByUser === "sms_ana"
                        ? "health-and-safety"
                        : "sunny"
                    }
                    size={RFValue(12)}
                    reverse
                    containerStyle={{ bottom: RFValue(12) }}
                    color={colors.primary}
                  />
                ),
              }}
            />
            <Text variant={"titleBold"}>Aa</Text>
          </Row>
        </Box>

        <Box my={"s"}>
          <Text variant={"tertiaryBold"} color={"grey"}>
            Style{" "}
          </Text>
          <Row mt={"xs"} justifyContent={"space-between"}>
            <Pressable onPress={() => setFontFamilyChoiced("default")}>
              <Text
                variant={"veryBigTitle"}
                color={fontFamilyChoiced === "default" ? "black" : "grey"}
                fontSize={RFValue(24)}
              >
                Aa
              </Text>
              <Text
                variant={"secondaryBold"}
                color={fontFamilyChoiced === "default" ? "black" : "grey"}
              >
                Default
              </Text>
            </Pressable>

            <Pressable onPress={() => setFontFamilyChoiced("serif")}>
              <Text
                variant={"veryBigTitle"}
                fontSize={RFValue(24)}
                color={fontFamilyChoiced === "serif" ? "black" : "grey"}
                fontFamily={"serif"}
              >
                Aa
              </Text>
              <Text
                variant={"secondaryBold"}
                color={fontFamilyChoiced === "serif" ? "black" : "grey"}
                fontFamily={"serif"}
              >
                Sérif
              </Text>
            </Pressable>

            <Pressable onPress={() => setFontFamilyChoiced("mono")}>
              <Text
                variant={"veryBigTitle"}
                fontSize={RFValue(24)}
                color={fontFamilyChoiced === "mono" ? "black" : "grey"}
                fontFamily={"mono"}
              >
                Aa
              </Text>
              <Text
                variant={"secondaryBold"}
                color={fontFamilyChoiced === "mono" ? "black" : "grey"}
                fontFamily={"mono"}
              >
                Mono
              </Text>
            </Pressable>
          </Row>
        </Box>

        <Box>
          <Text variant={"tertiaryBold"} color={"grey"}>
            Theme{" "}
          </Text>

          <Row mt={"xs"} alignItems={"center"} justifyContent={"space-between"}>
            <Text variant={"secondaryBold"}>
              {themeChoiced.value ? "Dark mode" : "Light mode"}
            </Text>

            <Row
              alignItems={"center"}
              justifyContent={"space-between"}
              flex={0.25}
            >
              <Text variant={"tertiaryBold"}>
                {themeChoiced.value ? "On" : "Off"}
              </Text>
              <Switch
                value={themeChoiced}
                onPress={() =>
                  setThemeChoiced((prevState) => {
                    if (prevState.value === 0) {
                      return {
                        label: "dark",
                        value: 1,
                      };
                    } else {
                      return {
                        label: "light",
                        value: 0,
                      };
                    }
                  })
                }
                style={learnStyles.switch}
                trackColors={{
                  on: colors.primary,
                  off: colors.tertiary,
                }}
              />
            </Row>
          </Row>
        </Box>

        <Box mt={"m"}>
          <Button
            label={"Confirmer les changements"}
            onPress={() => closeBottomSheet()}
            paddingHorizontal={"l"}
          />
        </Box>
      </BottomSheetModal>
    </Scaffold>
  );
};

export default ReadingContentScreen;
