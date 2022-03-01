import React , {useState , useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import './pagination.css'






const Pagination = ({showPerPage , onPaginationChange , total}) => {
    const[counter , setCounter] = useState(1);


    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage , value)
    }, [counter])



    const onButtonClick  = (type) => {
        if(type === "Prev"){
            if(counter === 1){
                setCounter(1)
            }else {
                setCounter(counter - 1)
            }
        } else if( type === "Next"){
            if(Math.ceil(total/showPerPage) === counter){
                setCounter(counter)
            }else{
                setCounter(counter + 1)
            }
        }
    }


  return (
    <div className='pages'>

    <button onClick={() => onButtonClick("Prev")}>Prev</button>
    <button onClick={() => onButtonClick("Next")}>Next</button>

    </div>
  )
}

export default Pagination