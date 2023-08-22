import React  from 'react';

import {useSelector, useDispatch} from 'react-redux'
import { setCategoryId } from '../../redux/slices/filterSlice';

import './categories.scss';
function Categories (){
  let categories =  ['All', 'Food', 'Rent', 'Netflix', 'Other', 'Shop', 'Study']
  const dispatch = useDispatch()
  const categoryId = useSelector(state => state.filter.categoryId)
  return (
    <div className="categories">
      <ul className="categories_ul">
        {
            categories.map((value, i) => (
              <li key={i} onClick={() => dispatch(setCategoryId(value))} className={categoryId == value ? 'categories_choosen' : 'categories_li'}>{value}</li>
            ))
        }
      </ul>
    </div>
  );
}
export default Categories;