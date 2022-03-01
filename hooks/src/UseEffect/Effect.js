import React, {useEffect, useState} from 'react'
import axios ,{ AxiosResponse, AxiosInstance } from 'axios';






const Effect = () => {

    const [data , setData] =useState("");
    const [count,setCount] = useState(0);

        useEffect(() =>{
            axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => 
            {setData(response.data[2].email)
            });
        }, []);


  return (
    <>
    <h1>{data}</h1>
    <h2>{count}</h2>
    <button onClick={() =>{setCount(count+1)}}>Click me</button>
    </>
  )
}

export default Effect;