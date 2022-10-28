import { useState } from "react"
import Child from "./Child"


const Parent=()=>{
    const[word,setWord]=useState('Parent');

    return(
        <>
 <h1>{word}</h1>
 <Child changeWord={(word)=>setWord(word)} />
 </>
    )
}
export default Parent