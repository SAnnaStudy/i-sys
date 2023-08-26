import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { setSortType } from '../../redux/slices/filterSlice';
import './sort.scss';

function Sort({setOpenPop}){
    const dispatch = useDispatch()
    const sortType = useSelector(state => state.filter.sortType)
  
  return(
      <div className="pop_up" id="pop_up">
          <div className="pop_up_container">
              <div className="pop_up_body" id="pop_up_body">
                  <div className="pop_up_content">
                      <div>
                        <p>Sort</p>
                        <div className="pop_up_close" id="pop_up_close" onClick={()=>setOpenPop(false)}>
                            <svg className="pop_up_close_sign" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73641 0.263604C10.0879 0.615076 10.0879 1.18492 9.73641 1.5364L6.273 5L9.73641 8.46362C10.0586 8.7858 10.0854 9.29148 9.81695 9.64424L9.73641 9.73641C9.38494 10.0879 8.81509 10.0879 8.46362 9.73641L5 6.273L1.5364 9.73641C1.18492 10.0879 0.615076 10.0879 0.263604 9.73641C-0.0878679 9.38494 -0.0878679 8.81509 0.263604 8.46362L3.727 5L0.263604 1.5364C-0.0585786 1.21421 -0.0854272 0.708534 0.183058 0.355769L0.263604 0.263604C0.615076 -0.087868 1.18492 -0.087868 1.5364 0.263604L5 3.727L8.46362 0.263604C8.81509 -0.087868 9.38494 -0.087868 9.73641 0.263604Z" fill="#C3C3C6"/>
                            </svg>
                        </div>
                      </div>
                      <form action="" className="form">
                          <div className="form_item">
                              <input className="form_input" type="radio" checked={sortType == 0 ? true: false} id='radioChoice1' name="radio" onChange={() => dispatch(setSortType(0))} />
                              <label className="form_label" for='radioChoice1'>By decreasing price</label>
                          </div>
                          <div className="form_item">
                              <input className="form_input" type="radio" checked={sortType == 1 ? true: false} id='radioChoice2' name="radio" onChange={() =>dispatch(setSortType(1))} />
                              <label className="form_label" for='radioChoice2'>By increasing price</label>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Sort