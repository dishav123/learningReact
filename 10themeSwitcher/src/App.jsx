import { useEffect,useState} from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode,setThemeMode]=useState('light');

  const darkTheme=()=>{
    setThemeMode('dark')
  }

  const lightTheme=()=>{
    setThemeMode('light')
  }

  useEffect(()=>{
    let screen=document.querySelector('html');
    screen.classList.remove('light','dark');
    document.documentElement.classList.toggle("dark", themeMode === "dark");
  },[themeMode]);


  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto"><Card/></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
