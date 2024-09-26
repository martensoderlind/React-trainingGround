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
            wind: data.current.wind_kph,
            time: data.location.localtime
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
        <div className='flex bg-gray-100 rounded-lg w-96 ml-4 h-48 shadow-xl'>
            <div className='p-2'>
                <h1 className=' flex font-semibold text-xl'>{weather.name}</h1>
                <h2 className=' flex font-semibold'>Temperatur: <p className='font-normal pl-2'> {weather.temp} °C</p></h2>
                <h2 className=' flex font-semibold'>Väderförhållanden: <p className='font-normal pl-2'> {weather.condition}</p></h2>
                <h2 className=' flex font-semibold'>Vind: <p className='font-normal pl-2'> {weather.wind} kph</p></h2>
            </div>
            <img src={weather.conditionIcon} alt="Weather icon" className=''/>
        </div>
    );
}


export default Weather;