import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { setCurrentUser } from '../../redux/slices/userSlice';
import { useNavigate } from "react-router-dom";
import './authorization.scss';

function Authorization (){
  const initualAuth = {email: '', password: ''}
  const dispatch = useDispatch()
  const users = useSelector(state => state.user.users)
  const [error, setError] = useState('')
  const [responseBody, setResponseBody] = useState(
    initualAuth
  )
  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    setResponseBody({...responseBody, [name]: value})
  }
  let navigate = useNavigate(); 
  const submitForm = (event) => {
    event.preventDefault()
    const potentionalUser = {
      email: responseBody.email,
      password: responseBody.password
    }
    const userWithFalsePassword = users.find(user => user.email == potentionalUser.email && user.password != potentionalUser.password)
    const rightUser = users.find(user => user.email == potentionalUser.email && user.password == potentionalUser.password)
    if(userWithFalsePassword){
      setError('Incorrect password')
    }
    else{
      if(rightUser){
        dispatch(setCurrentUser(rightUser))
        navigate('/main');
        document.getElementById("authForm").reset();
      }
      else{
        setError('The user with this mail was not found')
      }
    }
  }
  return (
    <div className="authorization">     
      <div className='authorization_container'>
          <p className='authorization_container_label'>EXPENDITURE APP</p>
          <form onSubmit={submitForm} id='authForm' className='authorization_form'>
            <div className="authorization_form_item">
              <label className="authorization_form_item_label" for='login'>Email</label>
              <input className="authorization_form_item_input" required name='email' type="text" id='login' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <div className="authorization_form_item">
              <label className="authorization_form_item_label" for='password'>Password</label>
              <input className="authorization_form_item_input" required name='password' type="password" id='password' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <div className="authorization_form_div">
              {
                error ?
                <p className='authorization_form_div_error'>{error}</p>
                : null
              }
              <button className="authorization_form_div_button" type='submit'>LOG IN</button>
              <Link to="/registration"><button className="authorization_form_div_button">SIGN UP</button></Link>
            </div>
          </form>
      </div>
    </div>
  );
}
export default Authorization;