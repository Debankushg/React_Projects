import React, {useState} from 'react'




const Inv2 = () => {

    const [name,setName] = useState("");
    const [interest,setInterest] = useState("");
    const[TnC ,setTnC] = useState(false);





    function handleData(e){
        e.preventDefault()
        console.warn("all data" ,name,interest,TnC)
    }
  return (
    <>
        <form onSubmit={handleData}>
            <input type="text" placeholder='Enter Name' onChange={(e) =>setName(e.target.value)}/> <br/> <br />
            <select onChange={(e) =>setInterest(e.target.value)}>
                <option value="">Marvel</option>
                <option value="">Doc</option>
            </select>
            <br />  <br />

            <input type="checkbox" className='check' onChange={(e) =>setTnC(e.target.value)}/> 

            <span>Agree with terms and conditons</span> <br/> <br/> 
            <button>Submit</button>
        </form>
    </>
  )
}

export default Inv2;