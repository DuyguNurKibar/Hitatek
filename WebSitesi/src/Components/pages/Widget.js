import { useEffect, useState } from 'react';
import axios from 'axios';
import './Widget.css';

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState('');
  const API_KEY = '2d01a42fc08b7e79ed32193e496ed97c';
  const CITY = 'Ankara';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setWeatherData(response.data);
        setWeatherIcon(getWeatherIcon(response.data.weather[0].main));
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [API_URL]);

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clouds':
        return 'fas fa-cloud'; 
      case 'Clear':
        return 'fas fa-sun'; 
      case 'Rain':
        return 'fas fa-cloud-rain'; 
      case 'Snow':
        return 'fas fa-snowflake'; 
      default:
        return '';
    }
  };

  return (
    <div className='weather-widget'>
      {weatherData ? (
        <div>
          <h2>
            <i className={weatherIcon}></i> {CITY}
            <span>{Math.round(weatherData.main.temp - 273.15)}°C</span>
          </h2>
        </div>
      ) : (
        <p>Hava durumu bilgileri yükleniyor...</p>
      )}
    </div>
  );
}

export default WeatherWidget;
