import { Locales } from 'intlayer';
import { loadJSON, syncJSON } from "@intlayer/sync-json-plugin";


/** @type {import('intlayer').IntlayerConfig} */
const config = {
  internationalization: {
    locales: [Locales.ARABIC,Locales.ENGLISH],
    defaultLocale: Locales.ARABIC,
  },
  // ai: {
  //   provider: "gemini",
  //   model: "gemini-2.0-flash",
  //   apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  // },
  // plugins: [
  //   syncJSON({
  //     source: ({ key, locale }) => `./public/locales/${locale}/${key}.json`,
  //   }),
  // ],
};

export default config;
