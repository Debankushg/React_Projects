import React,{useState,useEffect} from 'react';
import './style.css';
// import { useState } from "react/cjs/react.production.min";






const UseEffect = () => {

    const [myNum, setMyNum] = useState(0);
    
    useEffect (() =>{
        document.title = ` Notification (${myNum})`
    });

    return (
        <>
        <div className="center_div">
        <p>{myNum}</p>
        <div className ="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
            
        </>
    )
}

export default UseEffect
