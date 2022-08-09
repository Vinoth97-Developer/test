import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";

function Form() {
  const navigate =useNavigate();
  const location=useLocation();
  const [id,setId]=useState(0);
  const [isEdit,setIsEdit]=useState(false);

    const [formDetails,setFormDetails]=useState({studentName:"",studentPhone:"",studentEmail:""});


     useEffect(()=>{
      if(location && location.state && location.state.id){
        setId(location.state.id);
        setIsEdit(true);
        getDetailsById(location.state.id);
        console.log('location.state.id',location.state.id)
      }
     
     },[location])


     let getDetailsById = (id) => {
      axios
        .get("https://62d6214315ad24cbf2d123ea.mockapi.io/student/"+id)
        .then((response) => {
          console.log(response);
          setFormDetails(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
     
    let HandleInput=(e)=>{
      let {name,value}=e.target;
      let details={...formDetails};
      details[name]=value;
      setFormDetails(details)
    };
    let handleReg=()=>{
        console.log(formDetails);
        //save method
        axios.post('https://62d6214315ad24cbf2d123ea.mockapi.io/student',formDetails).then(response=>{
          console.log(response);
          navigate('/collage')
          alert('form saved successfully');

      }).catch(error=>{
          console.log(error)
      })
    }

    let handleUpdate=()=>{
      //update
      axios.put('https://62d6214315ad24cbf2d123ea.mockapi.io/student/'+id,formDetails).then(response=>{
        console.log(response);
        navigate('/collage')
        alert('form update successfully');

    }).catch(error=>{
        console.log(error)
    })
    }

    return ( <>
     <h2>Student Form</h2>

      <form action="">
        <label htmlFor="studentName">Name:<input type="text" name="studentName" id="studentName" value={formDetails.studentName}  onInput={HandleInput}/></label>
        <br />
        <label htmlFor="studentPhone">Phone:<input type="number" name="studentPhone" id="studentPhone" value={formDetails.studentPhone}  onInput={HandleInput}/></label>
        <br />
        <label htmlFor="studentEmail">Email:<input type="text" name="studentEmail" id="studentEmail" value={formDetails.studentEmail}  onInput={HandleInput}/></label>
        <br />
        
      </form>
      {
        isEdit ?
        <button onClick={handleUpdate}>Update</button>
        :
        <button onClick={handleReg}>Reister</button>
      }
    
    
    </> );
}

export default Form;