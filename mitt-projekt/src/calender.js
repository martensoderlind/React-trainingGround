import React, {useState} from "react";

const Calender = ()=>{


    return (
        <div className="calenderMain bg-gray-50 rounded-lg ">
            <div className="flex space-x-2 px-2 bg-gray-300 rounded-t-lg">
                <button className="">föregående</button>
                <h2>
                    månad
                </h2>
                <button className="">nästa</button>
            </div>
            <div className="grid grid-cols-7 gap-1 p-4">
                {['Mån','Tis','Ons','Tors','Fre','Lör','Sön'].map((day)=>(
                    <div key={day} className="text-center ">
                        {day}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Calender;
