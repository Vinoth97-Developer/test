import React, { useState } from "react";
import {Students} from "../helper/Constant";

function Student() {
   
//   const [studentName,setName]=useState('');
//   const [studentDob,setDob]=useState('');
//   const [studentClass,setClass]=useState('');
  const [studentDetails,setStudentDetails] =useState({studentName:'',
  studentDob:'',
  studentClass:''})
 
  const students=[...Students];
  const Dob=['20-05-97','12-07-96','12-06-95','14-09-20'];
  const Class=['class-A','class-B','class-C','class-D']

// let handleName=(e)=>{
//     setName(e.target.value)
// };
// let handleDob=(e)=>{
//     setDob(e.target.value)
// };
// let handleClass=(e)=>{
//      setClass(e.target.value)
// };


let handleChange=(e)=>{
 let {name,value}=e.target
 let details={...studentDetails};
 details[name]=value;
 setStudentDetails(details);
}

let handleSave=()=>{
console.log(studentDetails)
}

    return ( <>
    <h1>Student Details</h1>
       <select  name ="studentName" onChange={handleChange} value={studentDetails.studentName}>
        <option value="">Select Name</option>
        {students.map((item,i)=>{return(<option key={i} value={item}>{item}</option>)})}
       </select>

       <select  name="studentDob" onChange={handleChange} value={studentDetails.studentDob}>
        <option value="">Select DOB</option>
        {Dob.map((item,i)=>{return(<option key={i} value={item}>{item}</option>)})}
       </select>

       <select name="studentClass" onChange={handleChange} value={studentDetails.studentClass}>
        <option value="">Select Class</option>
        {Class.map((item,i)=>{return(<option key={i} value={item}>{item}</option>)})}
       </select>

       <button onClick={handleSave} >Save</button>
    
    </> );
}

export default Student;


