import { useState,useCallback,useEffect,useRef, use } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [noallowed,setNoallowed] =  useState(false);
  const [charallowed,setCharallowed] =  useState(false);
  const [password,setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"
    
    if(noallowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)       
      
        pass += str.charAt(char);
      }
      setPassword(pass);
  
  },[length,noallowed,charallowed,setPassword])

  useEffect(
    ()=>{
      passwordGenerator();
    },
  
  [length,noallowed,charallowed,passwordGenerator])

  const copyPasswordToClip = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
      window.navigator.clipboard.writeText(password)
  },[password]);

  return (
    <>
      <div className='w-full max-w-md  mx-auto shadow-md rounded-lg px-4 my-8 text-orange-300 bg-gray-600'>
        <h2 className='text-white text-center '>Password Generator </h2>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3 text-gray-800 bg-white'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClip}
          className='outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0'>
          Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={noallowed}
            id='numberInput'
            onChange={()=>{
              setNoallowed((prev) => !prev);
              }} />
              <label htmlFor='numberInput'>Numbers:</label>
          </div>

          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked={charallowed}
            id='characterInput'  
            onChange={()=>{
              setCharallowed((prev) => !prev);
              }} />
              <label htmlFor='characterInput'>Characters:</label>
          </div>


        </div>
      </div>
    </>
  )
}

export default App;
