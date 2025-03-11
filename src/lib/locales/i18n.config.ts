import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ItResource from './it.json';
import EnResource from './en.json';
import JaResource from './ja.json';

const defaultNS = 'translation';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'it',
        interpolation: {
            escapeValue: false
        },
        resources: {
            it: { translation: ItResource },
            en: { translation: EnResource },
            ja: { translation: JaResource }
        },
        ns: [defaultNS],
        defaultNS
    });

export default i18n;