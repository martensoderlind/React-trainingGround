import React from 'react';
import './App.css';
import MyHeader from './header.js'
import MainPlot from './mainPlot.js'
import Calender from './calender.js'
import Weather from './weather.js'


function App() {
  return (
    <div className="App">
      <MyHeader />
      <div className='flex'>
        <MainPlot />
        <div>
          <Calender />
          <Weather />          
        </div>
      </div>
    </div>
  );
}

export default App;
