import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './authorization.scss';
function Authorization (){
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
    <div className="authorization">     
      <div className='authorization_container'>
          <p className='authorization_container_label'>EXPENDITURE APP</p>
          <form onSubmit={submitForm} id='authForm' className='authorization_form'>
            <div className="authorization_form_item">
              <label className="authorization_form_item_label" for='login'>Email</label>
              <input className="authorization_form_item_input" required name='login' type="text" id='login' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <div className="authorization_form_item">
              <label className="authorization_form_item_label" for='password'>Password</label>
              <input className="authorization_form_item_input" required name='password' type="password" id='password' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
           <div className='authorization_form_actions'>
            <Link to="/main"><button className="authorization_form_button" type='submit'>Войти</button></Link>
            <Link to="/registration"><button className="authorization_form_button">Зарегистрироваться</button></Link>
           </div>
          </form>
      </div>
    </div>
  );
}
export default Authorization;