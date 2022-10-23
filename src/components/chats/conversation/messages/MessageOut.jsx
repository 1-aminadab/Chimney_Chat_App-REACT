import React from 'react'
import './MessageOut.css'
import ProfilePic from '../../../../images/profilepic.jpg'
function MessageOut() {
  return (
    <div className='message-out'>
           
        <div className="message">
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat est ipsa delectus quas aperiam asperiores perspiciatis temporibus ducimus voluptatibus deleniti.</h5>
            <h6>09:30 pm</h6>
        </div>
        <div className="time-send">
            
        </div>
        <div className="image">
            <img src={ProfilePic} alt="" />

        </div>
    </div>
  )
}

export default MessageOut
