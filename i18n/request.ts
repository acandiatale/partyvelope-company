import {getRequestConfig} from 'next-intl/server';
import ko from '../messages/ko.json';
import en from '../messages/en.json';

const messages = {
  ko,
  en
};

export default getRequestConfig(async ({locale}) => {
  const finalLocale = locale || 'ko';
  return {
    locale: finalLocale,
    messages: messages[finalLocale as keyof typeof messages] || messages.en
  };
});