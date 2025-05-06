import Login from "../src/components/Login"
import Profile from "../src/components/Profile"

import './App.css'
import UserContextProvider from './context/UserContexrProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
