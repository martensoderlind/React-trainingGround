import React, {useState, useEffect} from 'react';

async function getWeatherData() {
    const url = 'http://api.weatherapi.com/v1/current.json?key=ccbcf3b829164884a11150305242509&q=Stockholm&aqi=no';

    try{
        const response = await fetch(url);
        if(!response.ok){
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
        return weatherData;
    }catch(error){
        console.log(error)
    };
}

function Weather(){
    const [weather,setWeather] =useState(null);

    useEffect(()=>{
        const fetchWeather = async ()=>{
            const weatherData = await getWeatherData();
            setWeather(weatherData);
        };
        fetchWeather();

    });

    if(!weather) {
        return <div>Loading...</div>
    }
    
    return(
        <div>
            <p>Plats: {weather.name}</p>
            <p>Temperatur: {weather.temp} °C</p>
            <p>Väderförhållanden: {weather.condition}</p>
            <img src={weather.conditionIcon} alt="Weather icon" />
            <p>Vind: {weather.wind} kph</p>
        </div>
    );
}


export default Weather;