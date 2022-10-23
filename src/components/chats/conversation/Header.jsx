import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import HeaderPic from '../../../images/profilepic.jpg'
function Header() {
  return (
    <div className='header'>
        <div className="header-main">

       
        <div className="profile-photo-name">
          <div className="header-image">
            <img src={HeaderPic} alt="" />
          </div>
          <div className="name-status">
             <h4>Tizazu Geremew</h4>
             <h5>active now</h5>
          </div>
        
        </div>
        
        <div className="header-icons">
          <div className="icons">
            <VideocamTwoToneIcon />
          </div>
          
          <div className="icons">
            <SearchTwoToneIcon/>
          </div>
          <div className="icons">
            <MoreVertTwoToneIcon />
          </div>
        </div>
         </div>
    </div>
  )
}

export default Header