import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { useGetLocation } from "_hooks";
import { Box } from "_shared";
import { mapStyles } from "./styles";
import { StyleSheet } from "react-native";
import { showToast } from "_utils";
import { LegacyRef, useCallback, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";

const MapScreen = () => {
  const { position, errorMsgLocation } = useGetLocation();
  const mapRef = useRef<MapView>(null);

  if (errorMsgLocation) {
    showToast("error", "Erreur au niveau de la localisation", errorMsgLocation);
    return;
  }

  const animateToCurrentUserPosition = () => {
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
  };

  useFocusEffect(
    useCallback(() => {
      if (mapRef && mapRef.current && position) {
        animateToCurrentUserPosition();
      }
    }, [mapRef.current, position]),
  );

  return (
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
  );
};

export default MapScreen;
