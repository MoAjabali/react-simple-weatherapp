import  { useEffect, useState } from 'react';
import { Skeleton } from "./components/ui/skeleton"
import { Cloud, Sun, Wind, Droplets, MapPin, Calendar, Globe } from 'lucide-react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';


const WeatherCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let ignore = false;
    const fetchWeather = async () => {
      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;    
        setIsLoading(true);
        const response = await axios.get(apiUrl, {
          params: {
            lat: import.meta.env.VITE_OPEN_WEATHER_LATITUDE,
            lon: import.meta.env.VITE_OPEN_WEATHER_LONGITUDE,
            appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
            units: 'metric', 
          }
        });
        if (!ignore) {
          setWeatherData({
            city: response.data.name,
            country: response.data.sys.country,
            condition: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            feelsLike: Math.round(response.data.main.feels_like),
            temp: Math.round(response.data.main.temp),
          });
          
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
        if (!ignore) {
          setWeatherData({
            city: "Unknown",
            country: "Unknown",
            condition: "There is Error, check your internet and try again.",
            icon: "",
            humidity: 0,
            wind: 0,
            feelsLike: 0,
            temp: 0,
          });
          setIsLoading(false);
        }
      }
    };

    fetchWeather();
    return ()=>{
      ignore = true;
    };
  }, []);
  
  // const content = {
  //   ar: {
  //     city: "صنعاء",
  //     country: "الجمهورية اليمنية",
  //     condition: "غائم جزئياً",
  //     humidity: "الرطوبة",
  //     wind: "الرياح",
  //     feelsLike: "الشعور الحقيقي",
  //     dateFormat: ,
  //     temp: "28",
  //     toggle: "English"
  //   },
  //   en: {
  //     city: "Sanaa",
  //     country: "Yemen",
  //     condition: "Partly Cloudy",
  //     humidity: "Humidity",
  //     wind: "Wind",
  //     feelsLike: "Feels Like",
  //     dateFormat: ,
  //     temp: "28",
  //     toggle: "عربي"
  //   }
  // };

  // const t = content[lang];
  const isRTL = i18n.language === 'ar';
  const dateFormating = i18n.language==='ar'? "ar-SA" : "en-US" 
  const currentDate = new Date().toLocaleDateString(dateFormating, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
      <div 
        className={
          `relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-blue-200/50
          bg-gradient-to-br from-blue-500 to-blue-600 text-white `
        }
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 rounded-full bg-blue-300 blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 p-6 flex justify-between items-start">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-blue-100">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">{isLoading ? <Skeleton className="h-4 w-20 bg-white/40" /> : weatherData.country=='YE' ? t('Yemen') : t(weatherData.country)}</span>
            </div>
            <h2 className="text-2xl font-bold mt-1">{isLoading ? <Skeleton className="h-6 w-20 bg-white/40" /> : t(weatherData.city)}</h2>
            <div className="flex items-center gap-2 mt-2 text-blue-100 text-sm">
              <Calendar className="w-3 h-3" />
              <span>{currentDate}</span>
            </div>
          </div>
          
          <button 
            onClick={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-xs font-medium backdrop-blur-sm"
          >
            <Globe className="w-3 h-3" />
            {i18n.language === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>

        {/* Main Weather */}
        <div className="relative z-10 flex flex-col items-center justify-center py-8">
            { isLoading ?
              <Skeleton className="h-32 w-32 rounded-full bg-white/25" />
              :
              <>
                <img  src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} className='w-32 -m-4 text-white drop-shadow-lg animate-pulse' alt="" />
              </>
            }
          
          <div className="mt-6 flex justify-center flex-col items-center">
            <h1 className="text-7xl font-bold tracking-tighter">
              { isLoading ? <Skeleton className="h-20 w-22 bg-white/25" /> : weatherData.temp + "°" }
            </h1>
            <p className="text-xl font-medium text-blue-100 mt-2">
              { isLoading ? <Skeleton className="h-8 w-48 bg-white/25" /> : t(weatherData.condition) }
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/10 p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <Wind className="w-5 h-5 mb-2 text-blue-100" />
              <span className="text-xs text-blue-200">{t('Wind')}</span>
              <span className="font-semibold text-sm mt-1">
                { isLoading ? <Skeleton className="h-4 w-12 bg-white/40" /> : weatherData.wind + " "+ t("km/hr")}
              </span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <Droplets className="w-5 h-5 mb-2 text-blue-100" />
              <span className="text-xs text-blue-200">{t('Humidity')}</span>
              <span className="font-semibold text-sm mt-1">
                { isLoading ? <Skeleton className="h-4 w-12 bg-white/40" />: weatherData.humidity + "%"}
                
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <Sun className="w-5 h-5 mb-2 text-blue-100" />
              <span className="text-xs text-blue-200">{t('Feels Like')}</span>
              <span className="font-semibold text-sm mt-1">
                { isLoading ? <Skeleton className="h-4 w-12 bg-white/40" /> : weatherData.feelsLike + "°"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
export default WeatherCard;