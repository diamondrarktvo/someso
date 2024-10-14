import React, { useCallback, useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useGetLocation } from "_hooks";
import { Box, InputWithIcon, Loader } from "_shared";
import { mapStyles } from "./styles";
import { StyleSheet } from "react-native";
import { heightPercentageToDP, showToast } from "_utils";
import { useFocusEffect } from "@react-navigation/native";
import { useGetTheme } from "_theme";
import { transformNameToGeocode } from "../utils";

const MapScreen = () => {
  const { position, errorMsgLocation } = useGetLocation();
  const { colors, sizes } = useGetTheme();
  const mapRef = useRef<MapView>(null);
  const [cityName, setCityName] = useState("");
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

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
  }, [mapRef.current, position]);

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
        >
          {position && (
            <Marker
              key={`key_${position.longitude}_${position.latitude}`}
              coordinate={position}
              title={"Vous êtes ici"}
            />
          )}
        </MapView>
      </Box>
    </Loader>
  );
};

export default MapScreen;
