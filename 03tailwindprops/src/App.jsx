import { useState } from 'react'
import Card from './components/Card'
import Card2 from './components/Card2'
import index.css from './src/index.css'


function App() {
  const [count, setCount] = useState(0)
  const [play,setPlay]=useState(true);
  let myobj={
    Name:"Dishab",
    Age:20
  }
  let myArr=[1,"S",2];

  return (
          <div>
            {/* <h1 className='bg-green-500 text-amber-50 p-4 mb-4 rounded'>This is for tailwind and props</h1>
            <Card songName="Dusk till dawn" Singer="Zayn Malik"/>
            <Card songName="Drag me down" Singer="One Direction"/> */}
            
            <Card2/>
            
          </div>
  )
}

export default App
