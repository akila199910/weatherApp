type responseType = {
            "CityCode": number,
            "CityName": string,
            "Temp": number,
            "Status": string
        }

export const loadCityCodes = async () =>{
    const response = await fetch('/data/cityCodes.json');
    const data : responseType[]  = await response.json();

    return data.map(city => ({code: city.CityCode}));
}
