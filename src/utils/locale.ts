import * as locale from 'browser-locale';
const storage = window.localStorage;

export function getLocale(): Lang {
  return parseLocale();
}

export const saveLocale = (lang: Lang) => storage.setItem('lang', lang);

function parseLocale (): Lang {
  const s = storage.getItem('lang') || (() => locale())();

  switch (s.toLowerCase().substr(0,2)) {
    case 'en': return 'en';
    case 'zh': return 'zh';
    default:   return 'en';
  }
}
