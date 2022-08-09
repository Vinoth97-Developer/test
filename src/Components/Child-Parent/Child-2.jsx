import React, { useState } from "react";
import { City, Students,Phone } from "../helper/Constant";
 
function Child2(props) {
    
    const [Student,setStudent]=useState('');
    const [Place,setPlace]=useState('');
    const [Number,setNumber]=useState('');
    const phoneNum=[...Phone];
    const city=[...City];
    const students=[...Students];

    let handleStudent=(e)=>{
        setStudent(e.target.value);
        props.studentsName(e)
    };
    let handleCity=(e)=>{
        setPlace(e.target.value);
        props.studentsCity(e)
    };
    let handlePhone=(e)=>{
        setNumber(e.target.value);
        props.studentsPhone(e)
    }

    return ( <>
    <h1>Child-2</h1>
    
    <select onChange={handleStudent} value={Student}>
        <option value="">Select Student</option>
        {students.map((item)=>{return(<option value={item} >{item}</option>)})}
     </select>

     <select onChange={handleCity} value={Place}>
        <option value="">Select City</option>
        {city.map((item)=>{return(<option value={item}>{item}</option>)})}
     </select>

     <select onChange={handlePhone} value={Number}>
        <option value="">Select Number</option>
        {phoneNum.map((item)=>{return(<option value={item}>{item}</option>)})}

     </select>
    </> );
}

export default Child2;