import React from 'react'

import OneList from './chatListLists/OneList'
import SearchIcon from '@mui/icons-material/Search';
function ChatList() {
  return (
    <div className='chatlist'>
      <div className="chatlist_inputfild">
        <input type="text" placeholder='Search chat' required="required" id="search-chats" />
        <SearchIcon className='searchicon' style={{fontSize:"30px"}}/>
        <i></i>
      </div>
      
      <h2>Chats</h2>
      <div className="chatlist_lists">
          <OneList />
          <OneList />
          <OneList />
          <OneList /> <OneList />
          <OneList /> <OneList />
          <OneList />
      </div>
    </div>
  )
}

export default ChatList