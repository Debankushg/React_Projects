import React, {useRef} from 'react';




const UseRef = () => {

        const inputRef = useRef(null);

        const onClick =() =>{
             inputRef.current.value = "";  
        }



  return (
    <>
    <input type="text" placeholder='ex' ref={inputRef}/>
    <button onClick={onClick}>Change Name</button>
    </>
  )
}

export default UseRef;