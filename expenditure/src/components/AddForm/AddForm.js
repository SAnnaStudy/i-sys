import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './addForm.scss';
import {nanoid} from 'nanoid'
import { setItems } from '../../redux/slices/itemsSlice';
function AddForm(){
  const initualForm = {category: 'Food', date: '', price: '', description: '', id: null}
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()
  const [responseBody, setResponseBody] = useState(
    initualForm
  )
  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    setResponseBody({...responseBody, [name]: value})
  }
  const submitForm = (event) => {
    event.preventDefault()
    const newItem = {
      id: nanoid(),
      category: responseBody.category,
      date: responseBody.date,
      price: responseBody.price,
      description: responseBody.description
    }
    dispatch(setItems(newItem))
    console.log(items)
    document.getElementById("form").reset();
  }
  return(
      <div className="addform">
          <form className='addform_form' onSubmit={submitForm} id="form">
            <div className="addform_form_item">
              <label>Category
				        <select value={responseBody.category} className="addform_form_item_input" name='category' onChange={(e)=>inputChangeHandler(e)}>
                  <option value='Food'>Food</option>
                  <option value='Rent'>Rent</option>
                  <option value='Netflix'>Netflix</option>
                  <option value='Other'>Other</option>
                  <option value='Shop'>Shop</option>
                  <option value='Study'>Study</option>
			          </select>
		          </label>
            </div>
            <div className="addform_form_item">
              <label className="addform_form_item_label" for='desc'>Description</label>
              <input className="addform_form_item_input" required name='description' type="text" id='desc' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <div className="addform_form_item">
              <label className="addform_form_item_label" for='date'>Date</label>
              <input className="addform_form_item_input" required name='date' type="date" id='date' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <div className="addform_form_item">
              <label className="addform_form_item_label" for='price'>Price</label>
              <input className="addform_form_item_input" required name='price' type="text" id='price' onChange={(e)=>inputChangeHandler(e)}/>
            </div>
            <button type='submit' className="addform_form_button">ADD NEW</button>
          </form>
      </div>
  )
}

export default AddForm