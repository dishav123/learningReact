import { useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
