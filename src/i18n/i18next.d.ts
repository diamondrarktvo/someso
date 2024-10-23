import { defaultSpacing } from "@rneui/base";
import { Locales } from "./locales";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof Locales.fr;
  }
}
