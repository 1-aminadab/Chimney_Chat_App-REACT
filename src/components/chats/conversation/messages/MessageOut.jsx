import React from 'react'
import './MessageOut.css'
import ProfilePic from '../../../../images/profilepic.jpg'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
function MessageOut() {
  return (
    <div className='message-out'>
           
        <div className="message">
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat est ipsa delectus quas aperiam asperiores perspiciatis temporibus ducimus voluptatibus deleniti.</h5>
            <div className="time-options">
              <MoreVertTwoToneIcon />
               <h6>09:30 pm</h6>
            </div>
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
