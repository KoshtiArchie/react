import { useState } from "react"
import "./App.css"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="fixed top-0 left-0 w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap left-140 bottom-20 px-2">
        <div className="fixed flex flex-wrap justify-center gap-1 shadow-lg bg-white px-2 py-1 rounded-xl">
          <button className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
  

        </div>
      </div>
    </div>
    
  )
}

export default App;
