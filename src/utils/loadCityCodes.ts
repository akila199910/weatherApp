type City = {
    CityCode: string;
    CityName: string;
    Temp: string;
    Status: string;
};

export const loadCityCodes = async () => {
    const response = await fetch("/data/cities.json");
    const data = await response.json();
    console.log("Loaded city codes:", data);

    const array = data.List.map((city: City) => city.CityCode);

    return array;
};
