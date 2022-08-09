import React, { useEffect, useState } from "react";
import "./Collage.css";
import { useContext } from "react";
import { CollageContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Collage() {
  const [details, setDetails] = useState([]);
  const  navigate =useNavigate();
  useEffect(() => {
    getDetails();
  }, []);

  let getDetails = () => {
    axios
      .get("https://62d6214315ad24cbf2d123ea.mockapi.io/student") 
      .then((response) => {
        console.log(response);
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  let deleteById = (id) => {
    axios
      .delete("https://62d6214315ad24cbf2d123ea.mockapi.io/student/"+id)
      .then((response) => {
        console.log(response);
        getDetails();
        alert('delete succesfully')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let editById=(id)=>{
    console.log(id)
    navigate('/form',{
        state:{
            id:id,
            isEdit:true
        }
    })
  }

  return (
    <>
      <h1>Student Form List</h1>
      <div className="form-table">
        <table>
          <thead>
            <tr>
              <th>Name </th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            {details.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.studentName}</td>
                  <td>{item.studentPhone}</td>
                  <td>{item.studentEmail}</td>
                  <td><button onClick={()=>editById(item.id)}>Edit</button></td>

                  <td><button onClick={()=>deleteById(item.id)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Collage;
