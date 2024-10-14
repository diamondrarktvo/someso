import config from "_config";
import { PositionMapI } from "./types";

interface ResponseTransformeNameToGeocode
  extends Omit<PositionMapI, "latitudeDelta" | "longitudeDelta"> {
  longitude: number;
  latitude: number;
}

export const transformNameToGeocode = async (
  name: string,
): Promise<ResponseTransformeNameToGeocode> => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${config.API_KEY_GEOCODING}`,
  );
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  const data = await response.json();
  return {
    longitude: data[0].lon,
    latitude: data[0].lat,
  };
};
