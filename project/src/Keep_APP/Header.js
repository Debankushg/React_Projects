import React from 'react';
import logo from "./2.png";

const Header = () => {
    return (
        <>
        <div className="header">
            <img src={logo} alt="logo" width='70' height ='60'/>
            <h1>Dev keep</h1>
        </div>
            
        </>
    )
}

export default Header;
