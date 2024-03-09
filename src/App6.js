 import React, {useEffect} from "react";
 import {useState} from "react";

//  export default function App6()
//  {
//     const[count,setCount] =useState(0);
//     console.log("component loaded");
//     return(
//         <>
//         <button onClick={() => setCount((prevstate) => prevstate +1)}>click</button>
//         <span>{count}</span>
//         </>
//     );
//  }

export default function App6()
{
    const [runs, setRuns] =useState(0);
    const[Wickets,setwickets] =useState(0);
    console.log("component loaded");
    useEffect(()=>
    {
        console.log("better luck next time");
     },
      [Wickets]);
      return(
        <>
        <button onClick={() => setRuns((prevstate) => prevstate+1)}>Runs({runs})</button>
        <button onClick={() => setwickets((prevstate) => prevstate+1)}>Wickets({Wickets    })</button>
        </>
      );
}