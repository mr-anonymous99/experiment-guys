import React from "react";
import Student from "./Components/Student";
import Counter from "./Components/Counter";

const App=()=>{
  const age=1;
  return(
    <>
    <h1>Hello to the student PROFILES</h1>
    <Student name="rahulu" roll_no={62} age={62+61} marks={100}/>
    <Student name={"ganesh"} roll_no={59} age={[59]+[61]} marks={89}/>
    <Student name={"tarak"} roll_no={63} age={5+63} marks={90}/>

    <Counter/>
    </>
  )
}

export default App