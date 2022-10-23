import React from 'react'
import './MessageIn.css'
import ProfilePic from '../../../../images/profilepic.jpg'
function MessageIn() {
  return (
    <div className='message-in'>
        <div className="image">
            <img src={ProfilePic} alt="" />

        </div>
        <div className="message">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus culpa molestias! Nisi quaerat dolores suscipit possimus nulla aliquid sapiente itaque atque. Itaque dignissimos laboriosam sed quos ducimus! Saepe, voluptatibus.</h5>
            <h6>09:30 pm</h6>
        </div>
        <div className="time-send">
            
        </div>
    </div>
  )
}

export default MessageIn