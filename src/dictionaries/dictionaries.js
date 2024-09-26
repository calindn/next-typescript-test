 
const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  ro: () => import('./ro.json').then((module) => module.default),
  ru: () => import('./ru.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()
