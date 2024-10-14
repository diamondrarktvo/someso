import { ModuleSomesoTypes } from "_utils";

export interface PositionMapI {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface EmergencsI {
  id: number;
  title: string;
  module: ModuleSomesoTypes;
  description: string;
}
