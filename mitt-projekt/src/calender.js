import React, {useState} from "react";

const Calender = ()=>{
    const [currentDate, setCurrentDate] = useState(new Date()); 

    const daysInMonth = new Date(currentDate.getFullYear(),currentDate.getMonth()+1,0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(),currentDate.getMonth(),0).getDay();
    // console.log(`dagar i månad: ${daysInMonth}`);
    // console.log(`första dag i månad: ${firstDayOfMonth}`);

    const prevMonth=()=>{
        setCurrentDate(new Date(currentDate.getFullYear(),currentDate.getMonth()-1,1))
    };
    const nextMonth=()=>{
        setCurrentDate(new Date(currentDate.getFullYear(),currentDate.getMonth()+1,1));
    };

    const renderDays = ()=>{
        const days =[];
        for(let i=0;i<firstDayOfMonth;i++){
            days.push(<div key={i-firstDayOfMonth} className="p-2"></div>)
        };
        for (let i = 1; i < daysInMonth+1; i++) {
            days.push(<div key={i} className="p-2 hover:bg-gray-200">{i}</div>)
        };
        return days;
    };

    const renderMonth=()=>{
        const months =['January','February','Mars','April','May','June','July','August','September','October','November','December']
        const month = new Date(currentDate.getFullYear(),currentDate.getMonth(),1).getMonth();
        const year = new Date(currentDate.getFullYear(),currentDate.getMonth(),1).getFullYear();
        return `${months[month]} ${year}`;
    };
    return (
        <div className="calenderMain bg-gray-50 rounded-lg mx-4 my-2 w-96 h-96">
            <div className="flex space-x-16 p-2 bg-gray-300 rounded-t-lg">
                {/* <button className="" onClick={prevMonth}>föregående</button> */}
                <svg onClick={prevMonth} xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6z"/></svg>
                <h2 className="font-bold">
                    {renderMonth()}
                </h2>
                <svg onClick={nextMonth} xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/></svg>
            </div>
            <div className="grid grid-cols-7 gap-1 p-4">
                {['Mån','Tis','Ons','Tors','Fre','Lör','Sön'].map((day)=>(
                    <div key={day} className="text-center font-semibold">
                        {day}
                    </div>
                ))}
                {renderDays()}
            </div>
        </div>
    )
};

export default Calender;
