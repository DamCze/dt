import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        main_page: "Main page",
        workout: "Workout",
        diet: "Diet",
        report: "Report",
        logout: "Logout"
      }
    },
    pl: {
      translations: {
        main_page: "Strona główna",
        workout: "Trening",
        diet: "Dieta",
        report: "Raport",
        logout: "Wyloguj"
      }
    }
  },
  fallbackLng: "pl",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;