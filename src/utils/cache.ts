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

    try {
        const parsed = JSON.parse(cached);

        const isValid = (Date.now() - parsed.timestamp) < CACHE_TIME;

        return isValid ? parsed.data : null;
        
    } catch (error) {
        console.error("Error parsing cache:", error);
        return null;
    }
};
