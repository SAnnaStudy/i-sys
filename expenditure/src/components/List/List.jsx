import React from 'react';
import {useSelector} from 'react-redux'
import './list.scss';
import Thing from '../Thing/Thing';

function List ({searchValue}){
  const {priceCategory, dateCategoryId, sortType, categoryId} = useSelector(state => state.filter)
  const items = useSelector(state => state.items)
  let finalItems = items.filter(obj => {
    if(obj.description.toLowerCase().includes(searchValue.toLowerCase())){
        return true
    } else return false
  })
  if(categoryId != 'All'){
    finalItems = finalItems.filter(obj => {
      if(obj.category == categoryId){
          return true
      } else return false
    })
  }
  function getLastWeeksDate() {
    const now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 7,
    );
  }
  function getLastDayDate() {
    const now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 1,
    );
  }
  if(dateCategoryId != 0){
    let myDate = new Date();
    let startDate
    finalItems = finalItems.filter((i) => {
      let iDate = new Date(i.date)
      if(dateCategoryId == 1){
        return(
          iDate > myDate
        )
      }
      if(dateCategoryId == 2){
        return(
          myDate.getFullYear() === iDate.getFullYear() &&
          myDate.getMonth() === iDate.getMonth() &&
          myDate.getDate() === iDate.getDate()
        )
      }
      if(dateCategoryId == 3){
        startDate = getLastDayDate()
        return(
          myDate.getFullYear() === iDate.getFullYear() &&
          myDate.getMonth() === iDate.getMonth() &&
          myDate.getDate()-1 === iDate.getDate()
        )
      }
      if(dateCategoryId == 4){
        startDate = getLastWeeksDate()
        return(
          iDate >= startDate && iDate <= myDate
        )
      }
      if(dateCategoryId == 5){
        startDate = getLastWeeksDate()
        return(
          iDate < startDate
        )
      }
    })
  }
  if(priceCategory != 'All'){
    let actualPrice = parseInt(priceCategory.replace(/[^0-9]/g, ''))
    console.log(priceCategory, typeof(actualPrice))
   
    finalItems = finalItems.filter(obj => {
      if(obj.price <= actualPrice){
        console.log(obj.price)
          return true
      }
      else return false
    })
  }
  if (sortType == 0){
    finalItems.sort((a, b) => b.price - a.price);
  } else finalItems.sort((a, b) => a.price - b.price);
  return (
    <div className="list">
      {
          finalItems.map((obj) => (
              <Thing obj={obj}></Thing>
          ))
      }
    </div>
  );
}
export default List;