import React, { useState } from "react";

function Todo() {
  const [list, setList] = useState('');
  const [addList, setAddlist] = useState([]);
  const todoList=[...addList]
  

  let handleInput = (e) => {
    setList(e.target.value);
  };
  let handleAdd = () => {
   
    setAddlist(list);
    setList('');
    return(console.log(todoList))
  
  };
  let handleDelete=()=>{
    setAddlist('')
  }
  return (
    <>
      <h1>TODO-LIST</h1>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="text"
                value={list}
                onInput={handleInput}
                placeholder="Add List. . ."
              />
            </th>
            <th>
              <button onClick={handleAdd}>ADD</button>
            </th>
          </tr>
        </thead>
        <tbody>
             {todoList.map((item,i)=>{return(
              <tr key={i} >
                <td value={item}>{item}</td>
                <td><button onClick={handleDelete}>DEL</button></td>
              </tr>
             )})}
          
        
        </tbody>
      </table>
    </>
  );
}

export default Todo;
