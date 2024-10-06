import { defaultSpacing } from "@rneui/base";
import { Locales } from "./locales";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultSpacing;
    resources: typeof Locales;
  }
}
