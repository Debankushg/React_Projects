import React, {useState} from 'react';




const State = () => {

    const [inputVal , setInputVal] = useState("")
    const[data,setData] = useState(false);

    let onClick = (event) =>{
        const newValue = event.target.value;
        setInputVal(newValue);
        setData(false);
    }
  return (
    <>
    { data? <h1>{inputVal}</h1> : null}
    <input placeholder='Enter Some Value' onChange={onClick}/>
    <button onClick={() => setData(true)} >Click Me</button>
    </>
  )
}

export default State;