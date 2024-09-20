import './mainPlot.css';
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
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="dist"/>
                    <Tooltip dataKey="time"/>
                    <Legend />
                    <Line type="monotone" dataKey="dist" stroke="#8884d8" activeDot={{ r: 8 }} />   
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

const MainPlot = ()=>{
    return (
    <div class="mainContainer">
        <h3>Träningsstatistik</h3>
        <TrainingGraph />
    </div>
    );
};

export default MainPlot;