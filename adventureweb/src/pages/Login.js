import React from 'react';
import useForm from './useform';
import validate from './validateInfo';
import './Login.css';

const Login = ({submitForm}) => {

    const {handleChange , values,handleSubmit ,errors} = useForm (submitForm ,validate);
  return (
      <>
          <div className="form-contents-right">
              <form  className="forms" onSubmit={handleSubmit}>
                  <h1>If Account already created then please Login with valid creadential.</h1>
                  <div className="form-inputs">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" name='email' className="form-input" placeholder='Enter your email' value={values.email} onChange={handleChange} />
                      {errors.email && <p>{errors.email}</p>}
                  </div>
                  <div className="form-inputs">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" name='password' className="form-input" placeholder='Enter your Password'  value={values.password} onChange={handleChange}/>
                      {errors.password && <p>{errors.password}</p>}
                  </div>

                  <button className="form-input-btn" type='submit'>Log In <i class="fas fa-lock"></i></button>
                    
              </form>
          </div>
      </>
  );
};

export default Login;
