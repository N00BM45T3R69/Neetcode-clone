import { useState } from 'react'
import reactLogo from './assets/react.svg'
import OurNavBar from './Components/Navbar'
import Button from 'react-bootstrap/esm/Button'
function App() {
  const [num,setNum]= useState(0);
  const counter = () =>{
    setNum(num+1);
  }
  return (
    <div className="App">
     <OurNavBar></OurNavBar>
     
     <Button onClick={counter}>Click here : {num}</Button>
    </div>
  )
}

export default App
