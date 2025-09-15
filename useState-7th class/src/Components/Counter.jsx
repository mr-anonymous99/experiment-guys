import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
// console.log(count);

  return (
    <>
    <h1> count : {count}</h1>
    <button onClick={()=>(setCount(count+1))} >increment</button>
    <button onClick={()=>(setCount(count-1))}>decrement</button>
    {/* <button onClick={()=>(setCount(count=0))}>RESET</button> */}
    </>
    )
}

export default Counter