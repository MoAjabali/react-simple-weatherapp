# React Simple Weather App

A beautiful, bilingual (Arabic/English) weather application built with React, Vite, and Tailwind CSS. This application provides real-time weather updates with a modern, glassmorphism-inspired user interface.

## Features

- 🌍 **Bilingual Support**: Seamless switching between Arabic and English.
- ⚡ **Real-time Data**: Fetches live weather data using the OpenWeatherMap API.
- 🎨 **Modern UI**: Glassmorphism design with dynamic animations and responsive layout.
- 📱 **Responsive**: Optimized for all device sizes.
- 🌓 **RTL/LTR Support**: Full support for Right-to-Left (Arabic) and Left-to-Right (English) layouts.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Internationalization**: [i18next](https://www.i18next.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

You will also need an API key from [OpenWeatherMap](https://openweathermap.org/).

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MoAjabali/react-simple-weatherapp.git
   cd react-simple-weatherapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your OpenWeatherMap configuration:
   ```env
   VITE_OPEN_WEATHER_API_KEY=your_api_key_here
   VITE_OPEN_WEATHER_LATITUDE=your_latitude
   VITE_OPEN_WEATHER_LONGITUDE=your_longitude
   ```

## Usage

**Start the development server**
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

**Build for production**
```bash
npm run build
```

**Preview production build**
```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # UI components (Skeleton, etc.)
├── locales/        # Translation files
├── App.jsx         # Main application component
├── WeatherCard.jsx # Core weather display component
└── main.jsx        # Entry point
```

## License

This project is licensed under the MIT License.
