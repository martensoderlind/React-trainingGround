import React, {useState, useEffect} from 'react';
import url from './apiKey.js'

async function getWeatherData(url) {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status, ${response.status}`);
        };
        const data = await response.json();
        const weatherData={
            name: data.location.name,
            temp: data.current.temp_c,
            feelsLikeTemp: data.current.feelslike_c,
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
            const weatherData = await getWeatherData(url);
            setWeather(weatherData);
        };
        fetchWeather();

    },[]);

    if(!weather) {
        return <div>Loading...</div>
    }
    
    return(
        <div className='flex bg-gray-100 rounded-lg w-96 ml-4 h-48 shadow-xl'>
            <div className='p-2 w-1/1'>
                <h1 className=' flex font-semibold text-xl'>{weather.name}</h1>
                <h1 className='text-xs text-start'>{weather.time}</h1>
                <div className='flex justify-between'>
                    <img src={weather.conditionIcon} alt="Weather icon" className=''/>
                    <div className='pt-3'>
                        <h1 className=' flex font-semibold text-end'>{weather.temp} °C</h1>
                        <p className='text-xs pl-2 text-end'>Känns som {weather.feelsLikeTemp} °C</p>
                    </div>
                </div>
                
                <h2 className=' flex font-semibold'>Väderförhållanden: <p className='font-normal pl-2'> {weather.condition}</p></h2>
                <h2 className=' flex font-semibold'>Vind: <p className='font-normal pl-2'> {weather.wind} kph</p></h2>
            </div>
        </div>
    );
}


export default Weather;