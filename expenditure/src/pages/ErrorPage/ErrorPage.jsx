import React from 'react';
import './errorPage.scss';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

function ErrorPage (){
  const loggedUser = useSelector(state => state.user)
  return (
    <div className="ep_container">
    <div className="ep_content">
        <div className="ep_picture"></div>
        <p className="ep_title">Какой-то сверхразум все сломал</p>
        <p className="ep_text">Постараемся быстро починить</p>
        {
          loggedUser == null ?
            <Link className="ep_link" to="/">Попробовать снова</Link>
          
          : <Link className="ep_link" to="/main">Попробовать снова</Link>
        }
    </div>
    </div>
  );
}
export default ErrorPage;