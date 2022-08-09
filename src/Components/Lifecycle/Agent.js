import React, { useEffect, useState } from "react";
import { Title } from "../helper/Constant";
import Admin from "./Admin"

function Agent(props) {
    
    const [selectTitle,setTitle]=useState('');
    const [agent,setAgent]=useState('');

    useEffect(()=>{
        setAgent(props.name)
    },[props.name])


    const empTitle=[...Title]

    let handleTitle=(e)=>{setTitle(e.target.value)};
  

    let handleEmpSelect=(value)=>{
      props.handleSelect(value);
    }
    

    return ( <>
    <h1>Agent</h1>
    <h3>{agent}-{selectTitle}</h3>


    <select onChange={handleTitle} value={selectTitle}>
       <option value="">Select Title</option>
       {empTitle.map((item,i)=>{return(<option key={i} value={item}>{item}</option>)})}

    </select>
    <button >click</button>
    <hr/>

    <Admin title={selectTitle} agent={agent}  handleSelect={handleEmpSelect} />

    {/* <Admin  agent={props.name}  handleSelect={props.handleSelect} /> */}

    
    </> );
}

export default Agent;