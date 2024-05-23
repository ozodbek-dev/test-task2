import config from "config";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import storage from "services/storage";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .init({
    fallbackLng: storage.get("i18nextLng") ?? "uz",
    supportedLngs: ["en", "uz", "ru", "kr"],
    saveMissing: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      addPath: config.API_ROOT + "/translate/{{lng}}/",
      loadPath: config.API_ROOT + "/translate/{{lng}}/",
    },
  });

export default i18next;
