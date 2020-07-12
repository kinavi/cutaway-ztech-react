import axios from 'axios';

export const type = {
  SWITCH_LANG: 'SWITCH_LANG',
};

export const switchLang = (lang) => ({
  type: type.SWITCH_LANG,
  lang,
});

export const sendMail = (mail: string): void => {
  axios.post('mail.hosting.reg.ru:465', mail, {
  })
    .then((data) => { console.log(data); })
    .catch((error) => { console.log(error); });
};
