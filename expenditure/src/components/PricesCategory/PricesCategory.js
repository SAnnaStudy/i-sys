import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { setPriceCategory } from '../../redux/slices/filterSlice';
import './pricesCategory.scss';
function PricesCategory (){
  let priceCategories =  ['All', 'до 100', 'до 500', 'до 1000', 'до 5000', 'до 10 000']
  const dispatch = useDispatch()
  const priceCategory = useSelector(state => state.filter.priceCategory)
  const getMinNumber = (value) => {
    dispatch(setPriceCategory(value))
  }
  return (
    <div className="prices">
      <ul className="prices_ul">
        {
            priceCategories.map((value, i) => (
              <li key={i} onClick={() => getMinNumber(value)} className={priceCategory == value ? 'prices_choosen' : 'prices_li'}>{value}</li>
            ))
        }
      </ul>
    </div>
  );
}
export default PricesCategory;