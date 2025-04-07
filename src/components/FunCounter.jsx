import React, { useState } from 'react'
import "./FunCounter.css"
import Button from '@mui/material/Button';

const FunCounter = () => {
    const [count,setCount]=useState(0)
    function increment(){
        setCount(
            count+1
        )
    }
    function decrement(){
        setCount(
            count-1
        )
    }
    function reset(){
        setCount(
           0
        )
    }
  return (
      <div>
       <div className='Buttons'>
        <h1>Count : {count}</h1>
       
        <Button  variant = "outlined" onClick={()=> increment()}>Increment</Button>
        <Button  variant = "outlined" onClick={()=> decrement()}>Decrement</Button>
        <Button  variant = "outlined" onClick={()=> reset()}>RSEST</Button>
        </div>
    </div>
  )
}

export default FunCounter