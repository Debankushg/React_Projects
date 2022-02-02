import React , {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from  './FormSuccess';
import './signup.css'


function Signup () {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm(){
    setIsSubmitted(true);
  }
  return (
      <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='../images/img-4.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      </>
  );
}

export default Signup;
