import { useState } from 'react'
import './App.css'
import LoginPage from './Component/LoginPage/page';



function App() {
  const [color,setColor]=useState('green');


  return (
    <div>
      <LoginPage/>
    </div>
  )
}

export default App
