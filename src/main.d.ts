declare type Lang = 'en' | 'zh'

declare type setLang = (lang: Lang) => void

declare interface Theme {
  base?: string,
  accent?: string,
  white?: string,
  gray?: string,
  black?: string,
}

declare interface Item {
  to: string
  label: {
    [key: string]: string
    en: string
    zh: string
  }
}
