import React from 'react'
import ProfileImg from '../../../images/profileimg.jpg'
function OneList() {
  return (
    <div className="onelist">
      
    <div className="image">
      <img src={ProfileImg} alt="" />
    </div>
    
    <div className="name-status">
      <h5>Amanuel Tadesse</h5>
      <div className="last_message">
       <h6>wellcome</h6>
      </div>
    </div>
      <div className="gettime">
        <h5>11:50pm</h5> 
      </div>
    
   </div>
  )
}

export default OneList