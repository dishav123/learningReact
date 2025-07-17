import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import CallTally from './components/callTally'
import NavBar from './components/navBar'
import VerNavBar from './components/verticalNavBar'
import Gallery from './components/gallery'
import Footer from './components/footer'
import Mcard from './components/multipleCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
      {/* <NavBar/> */}
      <Card/>

    </div>

    
  )
}

export default App
