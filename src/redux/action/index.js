export const type = {
  SWITCH_LANG: 'SWITCH_LANG',
};

export const switchLang = (lang) => ({
  type: type.SWITCH_LANG,
  lang,
});

