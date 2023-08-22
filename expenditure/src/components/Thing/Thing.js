import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './thing.scss';
function Thing ({obj}){
  let date = new Date(obj["date"]).toLocaleString().split(',')[0]
  return (
    <div className="thing">
      <div className="thing_one">{date}</div>
      <div className="thing_one">
        {obj.category}
        <div className="thing_one_description">{obj.description}</div>
      </div>
      <div className="thing_one">{obj.price}</div>
    </div>
  );
}
export default Thing;