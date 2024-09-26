import React, {useState} from 'react';
import './App.css';
import MyHeader from './header.js'
import MainPlot from './mainPlot.js'
import Calender from './calender.js'
import Weather from './weather.js'
import {PrevRuns, PlannedRuns} from './runs.js'


function App() {
  const [currentView,setCurrentView] = useState('plannedRuns');

  const view ={
    'home':MainPlot,
    'plannedRuns':PlannedRuns,
    'prevRuns':PrevRuns
  }

  const CurrentView = view[currentView];
  // console.log(`view: ${view[currentView]}`); 
  return (
    <div className="App">
      <MyHeader view={setCurrentView}/>
      <div className='flex'>
          <CurrentView />
        <div>
          <Calender />
          <Weather />          
        </div>
      </div>
    </div>
  );
}

export default App;
