const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (cityCodes: string[]) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const results = [];

    for (const id of cityCodes) {
        const url = `${API_URL}?id=${id}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        results.push(data);
    }

    return results;
};
