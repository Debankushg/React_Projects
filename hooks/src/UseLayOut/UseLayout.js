import React, { useLayoutEffect ,useEffect, useRef} from 'react'




const UseLayout = () => {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log("UseLayoutEffect");
    }, []);
    
    useEffect(() => {
        inputRef.current.value = "Hello";
    }, []);


  return (
    <div>
        <input ref={inputRef} value= "PEDRA" style={{width:400, height:100}} />
    </div>
  )
}

export default UseLayout