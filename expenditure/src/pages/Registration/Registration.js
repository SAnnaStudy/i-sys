import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './registration.scss';
function Registration (){
  const initualAuth = {login: '', password: ''}
  const [responseBody, setResponseBody] = useState(
    initualAuth
  )
  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    setResponseBody({...responseBody, [name]: value})
  }
  const submitForm = (event) => {
    event.preventDefault()
    document.getElementById("authForm").reset();
  }
  return (
    <div className="registration">     
      <div className='registration_container'>
          <p className='registration_container_label'>EXPENDITURE APP</p>
          <form onSubmit={submitForm} id='authForm' className='registration_form'>
            <div className="registration_form_item">
              <label className="registration_form_item_label" for='login'>Email</label>
              <input className="registration_form_item_input" required name='login' type="text" id='login' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <div className="registration_form_item">
              <label className="registration_form_item_label" for='password'>Password</label>
              <input className="registration_form_item_input" required name='password' type="password" id='password' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <Link to="/main"><button className="registration_form_button">Зарегистрироваться</button></Link>
          </form>
      </div>
    </div>
  );
}
export default Registration;