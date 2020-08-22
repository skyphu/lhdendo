import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      endocrinology: "Endocrinology, Diabetes and Metabolism",
      home: "Home",
      about: "About",
      blog: "News & Articles",
    },
  },
  es: {
    translation: {
      endocrinology: "Endocrinología, Diabetes y Metabolismo",
      home: "Inicio",
      about: "Información",
      blog: "Noticias y Artículos",
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
});

export default i18n;
