import { Dimensions } from "react-native";
import { ModuleSomesoTypes } from "./Types";

export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

export const SCREEN_SIZE = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const ALL_MODULES_FOR_SOMESO = {
  SMS_ANA: "sms_ana" as ModuleSomesoTypes,
  SMS_CLIM: "sms_clim" as ModuleSomesoTypes,
};
