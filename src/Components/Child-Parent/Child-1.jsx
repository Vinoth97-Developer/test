import React, {useEffect, useState } from "react";
import Child2 from "./Child-2";
 
function Child1(props) {
    const [sdtName,setStdName]=useState('');
    const [sdtCity,setSdtCity]=useState('');
    const [sdtPhone,setStdPhone]=useState('');

    useEffect(() => {
        setStdName(props.Student);
        setSdtCity(props.Place);
        setStdPhone(props.Number)
    }, [props.Student,props.Place,props.Number]);

    let handleStudentsName=(value)=>{
        props.handleStudent(value);
    };
    let handleStudentsCity=(value)=>{
       
        props.handleCity(value);
    }
    let handleStudentsPhone=(value)=>{
      
        props.handlePhone(value);
    };
    return ( <>
    <h1>Child-1</h1>
    <h3>{sdtName}-{sdtCity}-{sdtPhone}</h3>
    
    
    <hr />
    <Child2 studentsName={handleStudentsName} studentsCity={handleStudentsCity} studentsPhone={handleStudentsPhone}/>
    </> );
}

export default Child1;