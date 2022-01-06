import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {

    const [fullName, setFullName] = useState({
        fname: " ",
        lname: " ",
        email: " ",
        phone: " ",
        address: " "
    });
    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const { value, name } = event.target;


        setFullName((preValue) => {
            console.log(preValue);
            return {
                ...preValue,
                [name]: value,
            };
        });

    };

    const onSubmits = (event) => {
        event.preventDefault();
        alert("From Submitted");
    };

    return (
        <>
            
                <form onSubmit={onSubmits}>
                    <h1> Hello {fullName.fname} {fullName.lname}</h1>
                    <p>{fullName.email}</p>
                    <p>{fullName.phone}</p>
                    <p>{fullName.address}</p>

                    <input type="text" placeholder='Enter Your First Name'
                        name="fname" onChange={inputEvent} value={fullName.fname} />

                    <input type="text" placeholder='Enter Your Last Name'
                        name="lname" onChange={inputEvent} value={fullName.lname} />

                    <input type="email" placeholder='Enter Your Email'
                        name="email" onChange={inputEvent} value={fullName.email} />

                    <input type="number" placeholder='Enter Your Phone No'
                        name="phone" onChange={inputEvent} value={fullName.phone} />

                    <input type="text" placeholder='Enter Your Address'
                        name="address" onChange={inputEvent} value={fullName.address} />

                    <button onClick={onSubmits}>Click Me</button>
                </form>
        

        </>
    )
}

export default Contact;
