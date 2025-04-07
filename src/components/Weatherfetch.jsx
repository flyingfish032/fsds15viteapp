import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherFetch = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('London');
  const [buttonCity, setButtonCity] = useState('London');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle button click to update city
  function clickHandler() {
    setButtonCity(city);
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null); // Reset previous errors
      try {
        const response = await axios.get('https://open-weather13.p.rapidapi.com/city/london/EN', {
          headers: {
            'x-rapidapi-key': 'ec4ac9de94msh0a7bc7f84f1d2c8p152516jsn0fe3f8c597b1', // Replace with your actual API key
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
          },
        });
        setWeatherData(response.data); // Store weather data in state
        setLoading(false);
      } catch (err) {
        setError(err.message); // Set error if request fails
        setLoading(false);
      }
    };

    if (buttonCity) {
      fetchWeatherData();
    }
  }, [buttonCity]); // Fetch weather data when buttonCity changes

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <br />
      <button onClick={clickHandler}>Get Weather</button>
      <br />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData.main && !loading && !error && (
        <div>
          <h3>Weather in {weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherFetch;
