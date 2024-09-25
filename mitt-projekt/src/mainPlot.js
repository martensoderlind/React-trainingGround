import './mainPlot.css';
import {data} from './data'
import React,{useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({active, payload, label})=>{
    if(active && payload && payload.length){
        const data = payload[0].payload;
        return(
            <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
                <p className=''>{`Datum: ${label}`}</p>
                <p className=''>{`Distance: ${payload[0].value} km`}</p>
                <p className=''>{`Tid: ${data.time}`}</p>
            </div>
        );
    };
}

const TrainingGraph =({trainingData})=>{
    return(
        <div style={{width:'90%', height: 280}} className="ml-2">
            <ResponsiveContainer>
                <LineChart
                data={trainingData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip/>}/>
                    <Legend />
                    <Line type="monotone" dataKey="dist" stroke="#8884d8" activeDot={{ r: 8 }} />   
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

const AddSession = ({submit})=>{
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
    <div className="ml-1">
        <h2 className="font-bold p-2">Lägg till pass</h2>
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

const MainPlot = ()=>{
    const [runningData, setRunningData] = useState(data);

    const updateRunningdata=(newRunningData) =>{
        setRunningData(prev =>{return [...prev,newRunningData]});
    };

    return (
        <div className='px-2 w-11/12 ml-1'>
            <div className='newInput'>
                <AddSession submit = {updateRunningdata} />
            </div>    
            <div className="mainContainer w-11/12 shadow-xl">
                <h3 className="font-bold">Träningsstatistik</h3>
                <TrainingGraph className="" trainingData={runningData}/>
            </div>
        </div>
    );
};

export default MainPlot;
