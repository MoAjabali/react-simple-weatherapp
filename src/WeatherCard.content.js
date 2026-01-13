import { t } from 'intlayer';

const weatherCardContent = {
  key: 'weather-card',
  content: {
    wind: t({
      en: 'Wind',
      ar: 'الرياح',
    }),
    humidity: t({
      en: 'Humidity',
      ar: 'الرطوبة',
    }),
    feelsLike: t({
      en: 'Feels Like',
      ar: 'شعر وكأنه',
    }),
    kmHr: t({
      en: 'km/hr',
      ar: 'كم/ساعة',
    }),
    unknown: t({
      en: 'Unknown',
      ar: 'غير معروف',
    }),
    error: t({
      en: 'There is Error, check your internet and try again.',
      ar: 'حصل خطاء, تحقق من الشبكة وحاول مجددًا.',
    }),
    yemen: t({
      en: 'Yemen',
      ar: 'الجمهورية اليمنية',
    }),
    sanaa: t({
      en: 'Sanaa',
      ar: 'صنعاء',
    }),
    // Weather conditions
    'clear sky': t({
      en: 'clear sky',
      ar: 'سماء صافية',
    }),
    'few clouds': t({
      en: 'few clouds',
      ar: 'غيوم قليلة',
    }),
    'scattered clouds': t({
      en: 'scattered clouds',
      ar: 'غيوم متفرقة',
    }),
    'broken clouds': t({
      en: 'broken clouds',
      ar: 'غيوم جزئية',
    }),
    'shower rain': t({
      en: 'shower rain',
      ar: 'زخات مطر',
    }),
    'rain': t({
      en: 'rain',
      ar: 'مطر',
    }),
    'thunderstorm': t({
      en: 'thunderstorm',
      ar: 'عاصفة رعدية',
    }),
    'snow': t({
      en: 'snow',
      ar: 'ثلج',
    }),
    'mist': t({
      en: 'mist',
      ar: 'ضباب',
    }),
  },
};

export default weatherCardContent;
