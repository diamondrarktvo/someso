import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import { getDataToMMKV } from "_storage";
import { Locales } from "./locales";

const DEFAULT_LANGUAGE = "fr-FR";

const initI18n = async () => {
  let savedLanguage = getDataToMMKV("user.preference.language", "string");

  if (!savedLanguage) {
    const allUsersLanguagePreferencies = Localization.getLocales();
    savedLanguage = allUsersLanguagePreferencies[0].languageTag;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources: Locales,
    lng: savedLanguage as string,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
