const dictionaries = {
  en: () =>
    import('././hive/pages/dictionaries/en.json').then((r) => r.default),
  hi: () =>
    import('././hive/pages/dictionaries/hi.json').then((r) => r.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
