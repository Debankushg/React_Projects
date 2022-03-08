import React, { useState , useEffect} from 'react'
import './Temp.css';





const Temp = () => {

    const [city , setCity] = useState(null);
    const [search, setSearch] = useState("")

    useEffect(() => {
     
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b658e14aec40af1646667e9f275e6ad5`;
            const response = await fetch(url);
            const resJson = response.json();
            // console.log(resJson)
            setCity(resJson.main)
        }

        fetchApi()
    }, [search])
    

  return (
      <>
    <div className='container'>
    <div className='box'>
        <input type="search"  className='inputData' value={search} onChange={(event) => {setSearch(event.target.value)}}/>
    </div>

 {!city ? (<p>No Data Found</p>) : 

 (
    <div>
    <div className="info">
    <h2 className="location"><i className="fa-solid fa-street-view"></i>{search}</h2>
    <h1 className="temp">
    {city.temp}
    </h1>  
    <h3 >Min:{city.temp_min}C  | Max:  {city.temp_max}C</h3>  
    </div>
    <div className="wave1"></div>
    <div className="wave2"></div>
    <div className="wave3"></div>
    </div>
    
)}
    </div>
    </>
  )
}

export default Temp