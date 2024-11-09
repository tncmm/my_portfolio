import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';

// Translation resources
const resources = {
  en: { translation: translationEN },
  tr: { translation: translationTR },
};

i18n.use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });
  console.log('i18n initialized with languages:', Object.keys(resources));


export default i18n;
