import { useEffect, useState } from "react";
import "./App.css";
import { loadCityCodes } from "./utils/loadCityCodes";
import { getWeatherData } from "./services/weatherService";
import { getCache } from "./utils/cache";

function App() {
  const [weatherList, setWeatherList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {

      const cached = getCache();
      if (cached) {
        console.log("Loaded from cache");
        setWeatherList(cached);
        setLoading(false);
        // if cached data is found, do not need to get data from API
        // return
        return;
      }

      const codes = await loadCityCodes();
      const data = await getWeatherData(codes);
      setWeatherList(data);
      setLoading(false);
    };

    fetchWeather();
  }, []);

  if (loading) return <h2 className="loading">Fetching Weather...</h2>;

  return (
    <div className="app-container">

      {/* --- Top Cloud Background --- */}
      <img className="cloud-top" src="/images/cloud-top.png" />

      <h1 className="title">Weather Dashboard</h1>

      <div className="weather-grid">
        {weatherList.map((city) => (
          <div key={city.id} className="weather-card">
            <h2 className="city-name">{city.name}</h2>

            <div className="temp-row">
              <span className="temp">{Math.round(city.main.temp)}°C</span>
              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              />
            </div>

            <p className="description">{city.weather[0].description}</p>

            <div className="details">
              <p><strong>Min:</strong> {Math.round(city.main.temp_min)}°C</p>
              <p><strong>Max:</strong> {Math.round(city.main.temp_max)}°C</p>
              <p><strong>Humidity:</strong> {city.main.humidity}%</p>
              <p><strong>Wind:</strong> {city.wind.speed} m/s</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Bottom Cloud Background --- */}
      <img className="cloud-bottom" src="/images/cloud-bottom.png" />
    </div>
  );
}

export default App;
