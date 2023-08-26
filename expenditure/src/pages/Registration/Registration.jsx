import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './registration.scss';
import {nanoid} from 'nanoid'
import { setUser } from '../../redux/slices/userSlice';
import { useNavigate } from "react-router-dom";

function Registration (){
  const initualAuth = {email: '', password: '', name: ''}
  const [responseBody, setResponseBody] = useState(
    initualAuth
  )
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    setResponseBody({...responseBody, [name]: value})
  }
  const users = useSelector(state => state.user.users)
  console.log(users)
  let navigate = useNavigate(); 
  const submitForm = (event) => {
    event.preventDefault()
    const newUser = {
      id: nanoid(),
      email: responseBody.email,
      password: responseBody.password,
      name: responseBody.name
    }
    const registredUser = users.find(user => user.email == newUser.email)
    if(registredUser){
      setError('The user with this email is already registered')
    }
    else{
      dispatch(setUser(newUser))
      navigate('/');
      document.getElementById("authForm").reset();
    }
  }
  return (
    <div className="registration">     
      <div className='registration_container'>
          <p className='registration_container_label'>EXPENDITURE APP</p>
          <form onSubmit={submitForm} id='authForm' className='registration_form'>
          <div className="registration_form_item">
              <label className="registration_form_item_label" for='name'>Name</label>
              <input className="registration_form_item_input" required name='name' type="text" id='name' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <div className="registration_form_item">
              <label className="registration_form_item_label" for='email'>Email</label>
              <input className="registration_form_item_input" required name='email' type="text" id='email' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <div className="registration_form_item">
              <label className="registration_form_item_label" for='password'>Password</label>
              <input className="registration_form_item_input" required name='password' type="password" id='password' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <div className="registration_form_div">
              {
                error ?
                <p className='registration_form_div_error'>{error}</p>
                : null
              }
              <button className="registration_form_div_button">SIGN UP</button>
            </div>
          </form>
      </div>
    </div>
  );
}
export default Registration;