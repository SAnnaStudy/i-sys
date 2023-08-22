import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './main.scss';
import List from '../../components/List/List';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import Searcher from '../../components/Searcher/Searcher';
import PricesCategory from '../../components/PricesCategory/PricesCategory';
import AddForm from '../../components/AddForm/AddForm';
import DateCategory from '../../components/DateCategory/DateCategory';
function Main (){
 
  const [openPop, setOpenPop] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  
  return (
    <div className="main">
      <div className='main_header'>
        <h1>EXPENDITURE APP</h1>
        <Link to="/"><button className="main_header_button" type='submit'><svg className='main_header_button_svg' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="about"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></g></svg></button></Link>
      </div>
      <Searcher setOpenPop={setOpenPop} searchValue={searchValue} setSearchValue={setSearchValue} className='main_searcher'></Searcher>
      <div className='main_actions'>
        <Categories></Categories>
        <DateCategory></DateCategory>
      </div>
      <hr className='hr'></hr>
      <PricesCategory></PricesCategory>
      <AddForm/>
      <List searchValue={searchValue} className="main_content"></List>
      {
        openPop && (
          <Sort setOpenPop={setOpenPop}/>
        )
      }     
    </div>
  );
}
export default Main;