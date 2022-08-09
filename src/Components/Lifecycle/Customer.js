import React, { useState } from "react";
import {EmployeeDetails} from '../helper/Constant';
import Agent from "./Agent";

function Customer(props) {
  const [selectedEmp,setSelectedEmp]=useState('')
  const employees=[...EmployeeDetails]

  let handleSelect=(e)=>{
    setSelectedEmp(e.target.value);
  }

    return ( 
    <>
        <h1>Employee {selectedEmp}</h1>

        <select onChange={handleSelect}  value={selectedEmp}>

       <option value="">Select Status</option>

        {employees.map((item,i) =>{ return ( <option  key={i} value={item}>{item}</option> ) } ) }

       </select>
         <hr/>
   
       <Agent name={selectedEmp}  handleSelect={handleSelect}/>
      
    
    
    </>  );
}

export default Customer;