import React from 'react'
import ChatList from './chats/ChatList'
import Conversation from './chats/Conversation'
import FriendProfile from './chats/FriendProfile'

import './Chat.css'
function Chat() {
  return (
    <div className='chat'>
      <ChatList />
      <Conversation />
      <FriendProfile />
    </div>
  )
}

export default Chat