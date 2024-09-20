import React from 'react';
import './App.css';
import MyHeader from './header.js'


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
      <h1>test av app</h1>  
      <MyHeader />
      <MyButton />
    </div>
  );
}

export default App;
