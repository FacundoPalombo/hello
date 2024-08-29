import i18n, { ResourceLanguage } from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationENG from "./locales/en/translation.json";
import translationITA from "./locales/it/translation.json";
import translationSPA from "./locales/es/translation.json";

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    supportedLngs: ["es", "en", "it"],
    resources: {
      it: translationITA as ResourceLanguage,
      en: translationENG as ResourceLanguage,
      es: translationSPA as ResourceLanguage,
    },
    fallbackLng: ["es", "en", "it"],

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
