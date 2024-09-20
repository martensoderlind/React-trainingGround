import React from 'react';
import './App.css';
import MyHeader from './header.js'
import MainPlot from './mainPlot.js'

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
      <MainPlot />
    </div>
  );
}

export default App;
