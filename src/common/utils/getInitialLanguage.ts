import { DEFAULT_LANGUAGE } from '../constants/locales';

export const getInitialLanguage = () =>
  localStorage.getItem('language') || DEFAULT_LANGUAGE;
