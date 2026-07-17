import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../locales/en/EnTranslation.json';
import ar from '../../locales/ar/ArTranslation.json';


const resources = {
    en: {
        // navbar: en.navbar
        ...en
    },
    ar: {
        // navbar: ar.navbar
        ...ar
    }
};




i18n.use(initReactI18next).init({
    resources,
    lng: "ar",
    fallbackLng: "ar",
    ns: ["navbar"],
    defaultNS: "navbar",
    fallbackNS: "navbar",
    interpolation: {
        escapeValue: false,
    },
});

// control the direction

export const htmlDirections = (lng) => {
    const dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
};

htmlDirections("ar");

i18n.on("languageChanged", (lng) => htmlDirections(lng));
export default i18n;