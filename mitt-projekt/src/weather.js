

async function getWeatherData() {
    const url = 'http://api.weatherapi.com/v1/current.json?key=ccbcf3b829164884a11150305242509&q=Stockholm&aqi=no';

    try{
        const response = await fetch(url);
        if(!response){
            throw new Error(`Response status, ${response.status}`);
        };
        const data = await response.json();
        const weatherData={
            name: data.location.name,
            temp: data.current.temp_c,
            condition: data.current.condition.text,
            conditionIcon: data.current.condition.icon,
            wind: data.current.wind_kph
        };
        console.log(weatherData);
    }catch(error){
        console.log(error)
    };
}
getWeatherData()