import React from 'react';
import Card from './Card';
import Sdata from './Sdata';



const Netflix = () =>{
return(
    <>
    <h1 className='heading_style'> List of top 6 Netflix Series</h1>
    {Sdata.map((val)=> 
     <Card key={val.id} imgSrc ={val.imgSrc} title ={val.title}  Sname ={val.Sname} link ={val.link}  /> )},
    </>
);

}
export default Netflix;