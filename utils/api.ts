import axios from 'axios';

type ApiRequest = {
  text: string;
  target: string;
  source: string;
};

const apiURL = 'https://translate.argosopentech.com/translate';

export const api = ({ text, target, source }: ApiRequest) =>
  axios
    .post(apiURL, {
      Headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
      q: text,
      target: target,
      source: source,
    })
    .then(async function (response) {
      return response.data.translatedText;
    })
    .catch(async function (error) {
      console.log(await error);
    });
