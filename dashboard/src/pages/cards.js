import React from 'react';
import './card.css';
// import { Cdata } from './Cdata';

const Cards = (props) => {
  console.log(props)
  return (
    <>
   
   
      <div className="card1">
        <div className="face face1">
          <h2>{props.title}</h2>,
           <p>{props.sub}</p> ,
          <a href="#">Read More</a>,
        <div className="face face2">
          <h2>{props.price}</h2>
        </div>
    </div>
      </div>
  
    
     
      </>
      
  );
};

export default Cards;
