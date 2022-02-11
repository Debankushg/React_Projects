import React, {useState} from 'react';
import Login from './Login';
import FormSuccess from './FormSuccess';
import './Login.css'

const FormLogin = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForms(){
    setIsSubmitted(true);
  }
  return (
      <>
        <div className='form-containers'>
        <span className='close-bttn'>×</span>
        <div className='form-contents-left'>
          <img className='form-img' src='../images/img-1.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (<Login submitForm={submitForms} />) : ( <FormSuccess />)}
        </div>
      </>
  );
};

export default FormLogin;
