import React, {useState} from "react";
import {data} from './data.js'

function PrevRuns(){

    return(
        <div className="px-2 w-11/12 ml-1">
            <h1>Tidigare</h1>
        </div>
    )

};
function PlannedRuns({submit}){
    const [newRunningData, setNewRun] = useState({ date: '', dist: '', time: '' });
    
    const handleNewInput =(e)=>{
        let {name, value} = e.target;
        if(name==="dist"){
            value = parseFloat(value);
        }
        setNewRun(prev =>({...prev, [name]:value}));
    };

    const handelSubmit=(e)=>{
        e.preventDefault();
        if(newRunningData.date && newRunningData.dist && newRunningData.time){
            submit(newRunningData);
        };
    };

    return(
        <div className="px-2 w-11/12 ml-1">
              <h2 className="font-bold p-2">Lägg till pass</h2>
              <p>fungerar inte än</p>
      <form onSubmit={handelSubmit} className="">
        <div className="inputs">
          <input
            type="date"
            name="date"
            value={newRunningData.date}
            onChange={handleNewInput}
            className="input"
            required
          />
          <input
            type="number"
            name="dist"
            value={newRunningData.dist}
            onChange={handleNewInput}
            placeholder="Distans (km)"
            step="0.1"
            className="input"
            required
          />
          <input
            type="time"
            name="time"
            value={newRunningData.time}
            onChange={handleNewInput}
            step="1"
            className="input"
            required
          />
          <button type="submit" className="bg-blue-800 p-1 px-2 mb-1 rounded-lg font-semibold text-slate-50 hover:bg-blue-950">Submit</button>
        </div>
      </form>
        </div>
    )
};

export  {PrevRuns, PlannedRuns};
