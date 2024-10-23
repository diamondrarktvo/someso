import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import { getDataToMMKV } from "_storage";
import { Locales } from "./locales";

const DEFAULT_LANGUAGE = "fr";

const initI18n = async () => {
  try {
    let savedLanguage = await getDataToMMKV(
      "user.preference.language",
      "string",
    );

    if (!savedLanguage) {
      const allUsersLanguagePreferences = Localization.getLocales();
      savedLanguage =
        allUsersLanguagePreferences[0]?.languageTag || DEFAULT_LANGUAGE;
    }

    i18n.on("initialized", (options) => {
      console.log("initié i18n");
    });

    await i18n.use(initReactI18next).init({
      compatibilityJSON: "v3",
      resources: Locales,
      lng: savedLanguage as string,
      fallbackLng: DEFAULT_LANGUAGE,
      interpolation: {
        escapeValue: false,
      },
    });
  } catch (error) {
    console.error("Error initializing i18n:", error);
    await i18n.use(initReactI18next).init({
      compatibilityJSON: "v3",
      resources: Locales,
      lng: DEFAULT_LANGUAGE,
      fallbackLng: DEFAULT_LANGUAGE,
      interpolation: {
        escapeValue: false,
      },
    });
  }
};

initI18n();

export default i18n;
