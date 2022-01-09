import React from 'react';
import web from "../src/images/img3.png";
import { NavLink } from 'react-router-dom';
import Services from './Services';
import Common from './Common';



const Home = () => {
    return (
        <>
          
          <Common name='Grow your business with' imgSrc={web}  visit= "/service"   btname ="Get Started"/>

        </>
    )
}

export default Home;

