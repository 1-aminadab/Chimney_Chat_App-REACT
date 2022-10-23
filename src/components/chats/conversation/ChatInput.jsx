import React from 'react'
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function ChatInput() {
  return (
    <div className='chatinput'>
      <input type="text" name="" id="" placeholder='Type Something...' />
      <div className="chatinput-icons">
      <AttachFileTwoToneIcon />
      <SentimentSatisfiedOutlinedIcon />
      <SendOutlinedIcon />
      </div>
    </div>
  )
}

export default ChatInput
