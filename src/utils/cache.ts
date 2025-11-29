const CACHE_KEY = "weather_cache";
const CACHE_TIME = 5 * 60 * 1000; 

type WeatherData = any[]; 
export const setCache = (data : WeatherData) => {

console.log("Setting cache with data:", data);

  localStorage.setItem(CACHE_KEY, JSON.stringify({
    timestamp: Date.now(),
    data
  }));
};

export const getCache = () => {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;

  const { timestamp, data } = JSON.parse(cached);

  if (Date.now() - timestamp < CACHE_TIME) {
    return data; 
  }

  return null;
};
