import './mainPlot.css';
import React,{useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {date: "2024-09-10", dist: 9.5, time: "00:50:00"},
    {date: "2024-09-11", dist: 10.0, time: "00:50:00"},
    {date: "2024-09-12", dist: 5.0, time: "00:50:00"},
    {date: "2024-09-13", dist: 7.0, time: "00:50:00"},
    {date: "2024-09-14", dist: 3.0, time: "00:50:00"},
    {date: "2024-09-15", dist: 12.0, time: "00:50:00"},
    {date: "2024-09-16", dist: 5.0, time: "00:50:00"},
    {date: "2024-09-17", dist: 9.5, time: "00:50:00"}
];

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

const TrainingGraph =()=>{
    return(
        <div style={{width:'100%', height: 300}}>
            <ResponsiveContainer>
                <LineChart
                data={data}
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

const AddSession = ()=>{
    const [runningData, setRunningData] = useState(data);
    const [newRunningData, setNewRun] = useState(data);

    const handleNewInput =(e)=>{
        const {name, value} = e.target;
        setNewRun(prev =>({...prev, [name]:value}));
        console.log(name, value)
    };

    const handleSubmit = (e)=>{
        if(newRunningData.date && newRunningData.dist && newRunningData.time){
            setRunningData(prev => [...prev,{...newRunningData, distance: parseFloat(newRunningData.distance)}]);
            setNewRun({date: '', dist:'', time:''});
        }else{
            console.log("fyll i all data");
        };
    };

    return(
    <div>
        <h2 className="">Lägg till pass</h2>
      
      <form onSubmit={handleSubmit} className="">
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
            name="distance"
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
          <button type="submit" className="">Submit</button>
        </div>
      </form>
    </div>
    )

};

const MainPlot = ()=>{
    return (
    <div>
        <div className='newInput'>
            <AddSession />
        </div>    
        <div className="mainContainer">
            <h3>Träningsstatistik</h3>
            <TrainingGraph />
        </div>
    </div>
    );
};

export default MainPlot;