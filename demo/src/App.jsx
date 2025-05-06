import { useState } from 'react';
import './App.css';

function App() {

  //let counter = 15; 
const [counter,setCounter] = useState(15);
  const addValue = () =>{
   // counter = counter + 1;
    setCounter(counter + 1);
    console.log("Value added",counter);
  }

  const removeValue = () =>{
    setCounter(counter - 1);
    console.log(counter);
    
  }

  return (
    <div id="wel"> 

   
    <h1>Welcome</h1>
    <h2>Counter value: {counter}</h2>
    
    <button onClick={addValue}> Add value</button><br></br>
    <button onClick={removeValue}>Remove value</button>
    </div>
  )
}

export default App
