import { useState,useEffect } from "react";

//Custom hooks file name can vary according to what is being returned.

export default function useCurrencyInfo(currency){
    const[data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        //fetch returns the response object.
        //the .json in the api link is just a file ext. but what we get raw HTTP response, that's why we need to change into JSON.
        .then((res)=>res.json())
        .then((res)=>setData(res)).catch(()=>console.log("Failed to set the data!"))
        console.log("this is data",data)
    },[currency])
    return data;
}