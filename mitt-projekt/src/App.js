import React, {useState} from 'react';
import './App.css';
import MyHeader from './header.js'
import MainPlot from './mainPlot.js'
import Calender from './calender.js'
import Weather from './weather.js'
import PrevRuns from './runs.js'


function App() {
  const [showPlot,setShowPlot] = useState(true);
  
  const toggleView = ()=>{
    setShowPlot(!showPlot);
  };

  return (
    <div className="App">
      <MyHeader view={toggleView}/>
      <div className='flex'>
        {showPlot ? <MainPlot />:<PrevRuns />}
        <div>
          <Calender />
          <Weather />          
        </div>
      </div>
    </div>
  );
}

export default App;
