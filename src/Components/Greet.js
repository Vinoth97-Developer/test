import React from "react";

const Greet=props=>{
    console.log(props);
    return <h1> Welcome {props.name}-{props.course}</h1>
}
export default Greet