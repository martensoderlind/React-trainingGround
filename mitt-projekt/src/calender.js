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

    return (
        <div className="calenderMain bg-gray-50 rounded-lg ">
            <div className="flex space-x-2 px-2 bg-gray-300 rounded-t-lg">
                <button className="" onClick={prevMonth}>föregående</button>
                <h2>
                    månad
                </h2>
                <button className="" onClick={nextMonth}>nästa</button>
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
