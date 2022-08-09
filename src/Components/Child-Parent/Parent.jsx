import React, { useState } from "react";
import { City, Students,Phone } from "../helper/Constant";
import Child1 from "./Child-1";

function Parent(props) {

    const [Student,setStudent]=useState('');
    const [Place,setPlace]=useState('');
    const [Number,setNumber]=useState('');
    const phoneNum=[...Phone];
    const city=[...City];
    const students=[...Students];

    let handleStudent=(e)=>{ 
        setStudent(e.target.value)
    };
    let handleCity=(e)=>{
        setPlace(e.target.value)
    };
    let handlePhone=(e)=>{
        setNumber(e.target.value)
    }

    return ( <>
    <h1>Parent</h1>
     
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


    <hr />
    <Child1 Student={Student} Place={Place} Number={Number}
     handleStudent={handleStudent} handleCity={handleCity} handlePhone={handlePhone}/>

    </> );
}

export default Parent;