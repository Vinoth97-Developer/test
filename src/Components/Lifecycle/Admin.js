import React, { useState } from "react";
import {EmployeeDetails} from '../helper/Constant';

function Admin(props) {

    const [selectedEmp,setSelectedEmp]=useState('')
    const employees=[...EmployeeDetails]
     
    let handleSelect=(e)=>{
      setSelectedEmp(e.target.value);
      props.handleSelect(e);
    };
    
    return ( <>
    <h1>Admin </h1>
    <h3>{props.agent}-{props.title}</h3>


    <select onChange={handleSelect}  value={selectedEmp}>

    <option value="">Select Status</option>

     {employees.map((item,i) =>{ return ( <option  key={i} value={item}>{item}</option> ) } ) }

     </select>
     <h3>{selectedEmp}</h3>
    
    </> );
}

export default Admin;
