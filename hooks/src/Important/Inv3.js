import React,{useState} from 'react'

const Inv3 = () => {

    const [loggedin,setLoggedIn] = useState(3);



    return(
        <>
            {
                loggedin==1? <h1>Welcome Dev</h1> 
                :loggedin==2? <h1>Welcome Guest</h1>
                : <h1>Welcome Dear</h1>
            }
        </>
    )

  
}

export default Inv3;