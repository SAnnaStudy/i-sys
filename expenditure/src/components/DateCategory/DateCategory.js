import React  from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { setDateCategoryId } from '../../redux/slices/filterSlice';
import './dateCategory.scss';
function DateCategory (){
  let dateCategories =  ['The whole time', 'Future', 'Today', 'Yesturday', 'Last week', 'Earlier']
  const dispatch = useDispatch()
  const dateCategoryId = useSelector(state => state.filter.dateCategoryId)
  return (
    <div className="datecategories">
      <ul className="datecategories_ul">
        {
            dateCategories.map((value, i) => (
              <li key={i} onClick={() => dispatch(setDateCategoryId(i))} className={dateCategoryId == i ? 'datecategories_choosen' : 'datecategories_li'}>{value}</li>
            ))
        }
      </ul>
    </div>
  );
}
export default DateCategory;