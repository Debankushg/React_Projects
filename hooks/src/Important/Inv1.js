import React, {useState} from 'react'





const Inv1 = () => {

    const [show,setShow] = useState(true)

  return (
    <>

    {
    show? <h1>Hello</h1> :null
    }

    <button onClick={() =>setShow(true)}> Show</button>
    <button onClick={() =>setShow(false)}>Hide</button>
    
    <button onClick={() =>setShow(!show)}>Toggle</button>
    </>
  )
}

export default Inv1