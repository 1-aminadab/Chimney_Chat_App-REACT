import React from 'react'
import Body from './conversation/Body'
import Header from './conversation/Header'
import ChatInput from './conversation/ChatInput'
function Conversation() {
  return (
    <div className='conversation'>
      <Header />
      <Body />
      <ChatInput />

    </div>
  )
}

export default Conversation