import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

//useContext to fetch data from userContext
function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({email,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={email}  onChange={(e) => setEmail(e.target.value)} placeholder='email'/>    
        <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='pw'/>    
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login