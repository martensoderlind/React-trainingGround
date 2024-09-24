import React from 'react';
import './App.css';
import MyHeader from './header.js'
import MainPlot from './mainPlot.js'
import Calender from './calender.js'

function MyButton(){
  return(
    <div>
      <button>
        myButton
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <MyHeader />
      <div>
      <MainPlot />
      <Calender />
      </div>
    </div>
  );
}

export default App;
