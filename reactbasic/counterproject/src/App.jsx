import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter=15;
let [counter ,setCounter]= useState(0)
const addValue=()=>{
  counter= counter+1;
  // console.log(counter);
  setCounter(counter)
}
const decreasevalue= ()=>{
  counter =counter-1;
  setCounter(counter)
}

  return (
   <>
   <h1>chai aur react</h1>
   <h2>counter value:{counter}</h2>
   <button onClick={addValue} >Add value</button>
   <br />
   <button onClick={decreasevalue}>decrease value</button>
   </>
  )
}

export default App
