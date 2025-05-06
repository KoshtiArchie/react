import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './comp/ThemeBtn';
import Card from './comp/Card';

function App() {
  const [themeMode,setThemeMode] = useState("light");
  
  const lightTheme = () =>{
    setThemeMode("light");
  }
  
  const darkTheme = () =>{
    setThemeMode("dark");
  }

  //actual change in theme

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode])

  return (

    <ThemeProvider value={{lightTheme,darkTheme,themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center overflow-hidden">
                <div className="w-full overflow-hidden" >
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4 overflow-hidden">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto overflow-hidden">
                        <Card/>
                    </div>
                </div>
      </div>
    </ThemeProvider>

  )
}

export default App
