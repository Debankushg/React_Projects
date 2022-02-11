import React from 'react';
import Cards from './cards'
import { Cdata } from './Cdata';

const Home = () => {
  return (
<>
<h1>Enjoy your plan with High Speed Digital Technology</h1>
<div className="container1">
{Cdata.map((val,ind) =>{
return <Cards
          title ={val.title} price ={val.price}  sub = {val.sub}/>
})}
</div> 

</>
  );
};
const Users = () => {
  return (
    <>
    <h1>Users</h1>
     <div className="container1">
      <div class="main-div">
      <h1>Please Enroll yourself</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
        provident sapiente dolor magni laudantium corporis voluptatum quis
        maiores odit nam, laboriosam placeat sequi delectus voluptatibus ex
        minima cupiditate eveniet vero.
      </p>
      <h3>Join First!!</h3>
    </div>
    </div>
    </>
  );
};
const Clients = () => {
  return (
    <>
    <div className='client'>
      <h1> Our Clients</h1>
    <div className="logo">
      <img src="../B/3.png" alt="Logo" />
      <img src="../B/5.png" alt="Logo" />
      <img src="../B/7.png" alt="Logo" />
      <img src="../B/12.png" alt="Logo" />
      <img src="../B/44.png" alt="Logo" />
    </div>
    </div>
    </>
  );
};

export { Home ,Users,Clients};
