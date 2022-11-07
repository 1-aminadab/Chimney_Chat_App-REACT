import React from 'react'

import OneList from './chatListLists/OneList'
import SearchIcon from '@mui/icons-material/Search';

import {peopleData} from '../../PeopleData'
import { PeopleSharp } from '@mui/icons-material';

import { PopperUnstyled } from '@mui/base'
import { People } from '@mui/icons-material'

import ProfileImg from '../../images/profileimg.jpg'

function ChatList() {

  const [peopleList, setPeopleList] = React.useState(peopleData)
  let mainColor = "var(--mainColor)"
  let primaryColor = "var(--primaryColor)"
  
  const refContainer = React.useRef(null)
   }

  return (
    <div className='chatlist'>
      <div className="chatlist_inputfild">
        <input type="text" placeholder='Search chat' required="required" id="search-chats" />
        <SearchIcon className='searchicon' style={{fontSize:"30px"}}/>
        <i></i>
      </div>
      
      <h2>Chats</h2>
      <div className="chatlist_lists">
         {peopleList.map(({name,recentTime,id})=>{
        
          return(

            <div  key={id} className="onelist" ref={refContainer}  onClick={()=>{changeStyle(id)}}   >
  
              <div className="image">
                <img src={ProfileImg} alt="" />
              </div>
              
              <div className="name-status">
                <h5>{name}</h5>
                <div className="last_message">
                <h6>wellcome</h6>
                </div>
              </div>
                <div className="gettime">
                  <h5>11:50pm</h5> 
              </div>
            
           </div>
          )
         })}
           
      </div>
    </div>
  )
}

export default ChatList