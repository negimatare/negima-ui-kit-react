import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import EnResource from './en.json';
import JaResource from './ja.json';

const defaultNS = 'translation';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: { translation: EnResource },
            ja: { translation: JaResource }
        },
        ns: [defaultNS],
        defaultNS
    });

export default i18n;