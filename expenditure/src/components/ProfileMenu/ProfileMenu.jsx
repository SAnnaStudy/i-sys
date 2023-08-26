import React from 'react';
import { deleteCurrentUser } from '../../redux/slices/userSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import './profileMenu.scss';

function ProfileMenu(){
    const dispatch = useDispatch()
    let navigate = useNavigate(); 
    const logOutClick = () => {
        dispatch(deleteCurrentUser())
        navigate('/');
    }
    return(
        <div className="profileMenu">
            <ul>
                <li onClick={logOutClick}>Log Out</li>
            </ul>
        </div>
    )
  }
  
  export default ProfileMenu