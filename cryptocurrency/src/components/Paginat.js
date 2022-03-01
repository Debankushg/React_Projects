import React from 'react'
import './Paginat.css'



const Paginat = ({showPerPage , paginate , total}) => {
    const pageNumbers = [] ;

    for(let i = 1 ; i <= Math.ceil(total / showPerPage); i++){
        pageNumbers.push(i);
    }
    



  return (
      <>
    <nav className='page'>
    <ul className="pagination">
        {pageNumbers.map(number =>(
            <li key={number} className={number === pageNumbers ? "active" : "page-item"}>
                <a onClick={() => paginate(number)}  className='page-link'>{number}</a>
            </li>
        ))}
    </ul>
    </nav>
    </>
  )
};

export default Paginat;