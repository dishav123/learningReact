import { useState } from "react";
import "tailwindcss";

export default function CallTally(){
    const [counter,setCounter]=useState(0);
    const [counter2,setCounter2]=useState(0);
    return(
        <div className="relative m-4 inline-block">
            <div className="absolute h-[200px] w-[300px] bg-white rounded-[12px] top-[50px] left-[50px] inline-block ">
                <p className="absolute top-2 left-6">Record of Call recieved</p>
                <input placeholder=" Enter Cluster name" className="border-2 border-gray-400 rounded-[4px] absolute top-12 left-6"></input>
                <h1 className="text-3xl absolute top-22 left-6">Counter: {counter}</h1>
                <button onClick={()=>setCounter(counter+1)} className="border-green-500 border-2 absolute pr-4 pl-4 top-[140px] left-[20px] rounded-[8px] bg-green-500 text-white text-2xl ">+</button>
                <button onClick={()=>counter>0?setCounter(counter-1):0} className="border-red-400 border-2 absolute pr-4 pl-4 top-[140px] left-[220px] rounded-[8px] bg-red-400 text-white text-2xl ">-</button>
                <button onClick={()=>setCounter(0)} className=" border-2 absolute pr-4 pl-4 top-[140px] left-[100px] rounded-[8px] bg-yellow-500 text-white text-2xl ">Reset</button>
            </div>

            <div className="absolute h-[200px] w-[300px] bg-white rounded-[12px] top-[50px] left-[400px] inline-block ">
                <p className="absolute top-2 left-6">Record of Call not recieved</p>
                <input placeholder=" Enter Cluster name" className="border-2 border-gray-400 rounded-[4px] absolute top-12 left-6"></input>
                <h1 className="text-3xl absolute top-22 left-6">Counter: {counter2}</h1>
                <button onClick={()=>setCounter2(counter2+1)} className="border-green-500 border-2 absolute pr-4 pl-4 top-[140px] left-[20px] rounded-[8px] bg-green-500 text-white text-2xl ">+</button>
                <button onClick={()=>counter2>0?setCounter2(counter2-1):0} className="border-red-400 border-2 absolute pr-4 pl-4 top-[140px] left-[220px] rounded-[8px] bg-red-400 text-white text-2xl ">-</button>
                <button onClick={()=>setCounter2(0)} className=" border-2 absolute pr-4 pl-4 top-[140px] left-[100px] rounded-[8px] bg-yellow-500 text-white text-2xl ">Reset</button>
            </div>
        </div>
    )
}