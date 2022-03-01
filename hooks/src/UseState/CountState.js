import React,{useState} from 'react'





const CountState = () => {

    const[count,setCount] = useState(0);

    const inc = () =>{
        setCount(count+1);
    }
    
  return (
    <>
    {count}  <button onClick={inc}>Increment</button>
   
    </>
  )
}

export default CountState