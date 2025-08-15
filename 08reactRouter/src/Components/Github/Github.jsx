import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {

    // const[data,setData]=useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/dishav123')
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    const data=useLoaderData()
    
    return ( 
        <div  className="bg-black  text-center p-4">
            <h1 className="text-3xl text-white">Github Followers:{data.followers}</h1>
            <img src="data.avatar_url" alt="Photo" className="w-10"></img>
        </div>
     );
}

export default Github;
export const githubInfoLoader = async ()=>{
    const res=await fetch('https://api.github.com/users/dishav123')
    return res.json();

}