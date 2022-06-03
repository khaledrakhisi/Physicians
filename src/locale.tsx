import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      ar: {
        translation: {
          khaledrakhisi: "خالد رخیصی",
          internal: "الداخلی",
          kids: "الأطفال",
          surgery: "الجراحی",
          backToHome: "رجوع الی الصفحه الرئیسیه",
          notFoundMsg: "الصفحه لا توجد",
        },
      },
      fa: {
        translation: {
          khaledrakhisi: "خالد رخیصی",
          internal: "الداخلی",
          kids: "الأطفال",
          surgery: "الجراحی",
          backToHome: "Back to Main Page",
          notFoundMsg: "Page Not Found!",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
