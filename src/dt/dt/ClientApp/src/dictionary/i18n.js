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
        logout: "Logout",
        breakfast: "Breakfast",
        brunch: "Brunch",
        lunch: "Lunch",
        dinner: "Dinner",
        snack: "Snack",
        supper: "Supper",
        empty: "Empty",
        add: "Add",
        save: "Save",
        close: "Close",
        food: "Food"
      }
    },
    pl: {
      translations: {
        main_page: "Strona główna",
        workout: "Trening",
        diet: "Dieta",
        report: "Raport",
        logout: "Wyloguj",
        breakfast: "Śniadanie",
        brunch: "Drugie śniadanie",
        lunch: "Lunch",
        dinner: "Obiad",
        snack: "Przekąska",
        supper: "Kolacja",
        empty: "Brak",
        add: "Dodaj",
        save: "Zapisz",
        close: "Zamknij",
        food: "Jedzenie"
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