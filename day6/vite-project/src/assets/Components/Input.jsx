import React from "react";
import { useState } from "react";

const Input=()=>{
    
    const[task,settask]=useState('');
    const[data,setdata]=useState([]);
    


    const list=data.map(item=><h5>{item}<button >delete</button></h5>)
    const renderChange=(e)=>{
        return settask(e.target.value)
    }
    
    const addDdata=()=>{
     const newData=task;
     setdata([...data,newData])
        settask('');
       
    }
    return(
    <>
    <input type="text" name="" placeholder="Enter yours task" value={task} onChange={renderChange} />
    <button onClick={addDdata} >Add</button>
        <div>
        {
            list
        }
        </div>
    </>
    )
}

export default Input