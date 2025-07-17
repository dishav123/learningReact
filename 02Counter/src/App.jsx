import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count=0;
  const [count,setCount]=useState(0);


  return (
    <>
     <h1> React Revision</h1>
     <h2>Count : {count}</h2>
     <button onClick={count<20?()=>setCount(count+1):20}>Add value</button>
     <br/>
     <button onClick={count>0?()=>setCount(count-1):0}>Decrease Value</button>
    </>
  )
}

export default App
