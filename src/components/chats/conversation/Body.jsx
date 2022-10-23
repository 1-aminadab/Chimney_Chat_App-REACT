import React from 'react'
import MessageIn from './messages/MessageIn'
import MessageOut from './messages/MessageOut'
function Body() {
  return (
    <div className='body'>
      <div className="main-body">
        <MessageIn />
        <MessageIn />
        <MessageOut />
        <MessageOut />
        <MessageIn />
        <MessageOut />
        <MessageIn />
        <MessageOut />
        <MessageIn />
        <MessageOut />
      </div>
    </div>
  )
}

export default Body
