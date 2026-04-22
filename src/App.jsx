import { useState } from 'react';
import './App.css'
import DynamicBox from './components/DynamicBox/DynamicBox';
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const API_KEY = "d85d06c4d1ea158f070c82dd2746cbf3";
  const UNITS = "&units=metric"

  const [validity, setValidity] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState({});

  const getWeatherData = async (cityName) => {
    if (cityName === '') {
      setError('Please enter a city name');
      return;
    }
    setError(null);

    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}${UNITS}`;
    try {
      const res = await fetch(URL);
      const data = await res.json();
      updateUI(data);
    } catch (error) {
      return error;
    }
  }

  const updateUI = (data) => {
    if (data.cod != 200) {
      setError('Invalid city');
      setValidity(false);
      return;
    }

    setError(null);
    setWeather({
      type: data.weather[0].main,
      temp: data.main.temp,
      city: data.name,
      humidity: data.main.humidity,
      speed: data.wind.speed
    });
    setValidity(true);
  }


  return (
    <>
      <div className="card">
        <SearchBar onSearch={getWeatherData} />
        {error && <p className='warning'>{error}</p>}
        {validity && <DynamicBox data={weather} />}
      </div>
    </>
  )
}

export default App