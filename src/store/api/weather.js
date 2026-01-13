import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  reducerPath: 'weatherApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
  
  endpoints: (builder) => ({
    getWeatherData: builder.query({
      query: () => `weather?lat=${import.meta.env.VITE_OPEN_WEATHER_LATITUDE}&lon=${import.meta.env.VITE_OPEN_WEATHER_LONGITUDE}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&units=${'metric'}`,
    }),
  }),
})

export const { useGetWeatherDataQuery } = weatherApi