import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { PositionMapT } from "../features/emergency-service/types";

export const useGetLocation = () => {
  //all states
  const [position, setPosition] = useState<
    Omit<PositionMapT, "latitudeDelta" | "longitudeDelta">
  >({ longitude: 0.0, latitude: 0.0 });
  const [errorMsgLocation, setErrorMsgLocation] = useState<string>("");

  //all effects
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return setErrorMsgLocation(
          "Permission pour accéder au position est refuser!",
        );
      }
      let location = await Location.getCurrentPositionAsync();
      setPosition({
        ...position,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  return { position, errorMsgLocation };
};
