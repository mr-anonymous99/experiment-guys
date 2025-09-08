import React from 'react'

const Student = (prop) => {
    console.log(prop);
    
  return (
    <div>
        <h1>Student Name : {prop["name"]} | type : {typeof(prop.name)}</h1> 
        <h3>Roll_no :{prop["roll_no"]} | type :{typeof(prop.roll_no)}</h3>
        <h3>age : {prop["age"]} | type : {typeof(prop.age)}</h3>
        <h3>marks : {prop["marks"]} | type : {typeof(prop.marks)}</h3>
    </div>
  )
}

export default Student