import React, { useCallback, useEffect, useRef, useState } from "react";
import MapView, {
  MapPressEvent,
  Marker,
  MarkerDragStartEndEvent,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { useGetLocation } from "_hooks";
import { Box, Button, InputWithIcon, Loader } from "_shared";
import { mapStyles } from "./styles";
import { StyleSheet } from "react-native";
import { heightPercentageToDP, RFValue, showToast } from "_utils";
import { useGetTheme } from "_theme";
import { transformNameToGeocode } from "../utils";
import { PositionMapI } from "../types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ImageEmergency } from "./ImageEmergency";

const MapScreen = () => {
  const { position, errorMsgLocation } = useGetLocation();
  const navigation = useNavigation();
  const { colors, sizes } = useGetTheme();
  const mapRef = useRef<MapView>(null);
  const [cityName, setCityName] = useState("");
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [isLoadingSend, setIsLoadingSend] = useState(false);
  const { icon_emergency } = useRoute().params as { icon_emergency: string };

  const [marker, setMarker] = useState<
    Omit<PositionMapI, "latitudeDelta" | "longitudeDelta">
  >({
    longitude: 0.0,
    latitude: 0.0,
  });

  if (errorMsgLocation) {
    showToast("error", "Erreur au niveau de la localisation", errorMsgLocation);
    return null;
  }

  const animateToCurrentUserPosition = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0021,
        },
        1000,
      );
    }
  }, [position]);

  useEffect(() => {
    if (position) {
      animateToCurrentUserPosition();
    }
  }, [position, animateToCurrentUserPosition]);

  const handleSearch = useCallback(() => {
    if (cityName !== "") {
      setIsLoadingSearch(true);
      transformNameToGeocode(cityName)
        .then((data) => {
          if (mapRef.current) {
            mapRef.current.animateToRegion(
              {
                latitude: data.latitude,
                longitude: data.longitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0021,
              },
              1000,
            );
          }
        })
        .catch((error) => {
          console.log("Erreur lors de la recherche de la ville : ", error);
          showToast(
            "error",
            "Une erreur est survenue lors de la recherche de votre ville",
            JSON.stringify(error),
          );
        })
        .finally(() => {
          setIsLoadingSearch(false);
        });
    }
  }, [cityName]);

  const handleMapPress = useCallback((e: MapPressEvent) => {
    const coordinate = e.nativeEvent.coordinate;
    setMarker(coordinate);
  }, []);

  const handleMarkerDragEnd = useCallback((e: MarkerDragStartEndEvent) => {
    const coordinate = e.nativeEvent.coordinate;
    setMarker(coordinate);
  }, []);

  const onSendHelp = () => {
    setIsLoadingSend(true);
    setTimeout(() => {
      showToast(
        "success",
        "Demande d'aide envoyée",
        "Votre demande d'aide a bien été envoyée",
      );
      setIsLoadingSend(false);
      navigation.navigate("main_tabs", {
        screen: "emergency_screen",
      });
    }, 3000);
  };

  return (
    <Loader isLoading={isLoadingSearch} isOverlay={false}>
      <Box
        position={"absolute"}
        zIndex={2}
        width={"90%"}
        mx={"s"}
        top={heightPercentageToDP(6)}
      >
        <InputWithIcon
          placeholder="ex: Antananarivo"
          value={cityName}
          onChangeText={setCityName}
          iconLeft={{
            name: "place",
            size: sizes.ICON_MEDIUM,
            color: colors.text,
          }}
          iconRight={{
            name: "search",
            size: sizes.ICON_MEDIUM,
            color: colors.text,
            onPress: handleSearch,
          }}
        />
      </Box>
      <Box
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"mainBackground"}
      >
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={[mapStyles.map, StyleSheet.absoluteFillObject]}
          initialRegion={{
            latitude: position.latitude,
            longitude: position.longitude,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0021,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          onPress={handleMapPress}
        >
          {position.latitude && position.longitude ? (
            <Marker
              key={`user_${position.longitude}_${position.latitude}`}
              coordinate={position}
              title={"Vous êtes ici"}
            />
          ) : null}

          {marker.longitude !== 0.0 &&
            marker.latitude !== 0.0 &&
            icon_emergency && (
              <Marker
                key={`custom_marker`}
                coordinate={marker}
                title={"Urgence ici"}
                draggable
                onDragEnd={handleMarkerDragEnd}
              >
                <ImageEmergency
                  name={icon_emergency}
                  height={RFValue(20)}
                  width={RFValue(20)}
                />
              </Marker>
            )}
        </MapView>
      </Box>

      {marker.longitude !== 0.0 &&
        marker.latitude !== 0.0 &&
        icon_emergency && (
          <Box
            position={"absolute"}
            zIndex={2}
            width={"90%"}
            mx={"s"}
            bottom={heightPercentageToDP(2)}
          >
            <Button
              loading={isLoadingSend}
              label={"Demander de l'aide"}
              onPress={() => onSendHelp()}
              paddingHorizontal={"l"}
              height={RFValue(45)}
            />
          </Box>
        )}
    </Loader>
  );
};

export default MapScreen;
