import React, { Profiler } from 'react'
import './Navbar.css'

//imported Icons
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CampaignIcon from '@mui/icons-material/Campaign';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LogoutIcon from '@mui/icons-material/Logout';
import RoofingIcon from '@mui/icons-material/Roofing';

//imported images

import Profile from '../images/profilepic.jpg'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar_main">
      <div className="logo">
        <RoofingIcon style={{fontSize:"40px"}}/>
        {/* <h6>Chmny</h6> */}
      </div>
      <div className="navbar_catagory">
        <div className="catagory_icons">
          <PersonIcon />
        </div>
        <div className="catagory_icons">
          <GroupsIcon />
        </div>
        <div className="catagory_icons">
          <CampaignIcon />
        </div>
        <div className="catagory_icons">
          <BookmarksIcon />
        </div>
      </div>
      <div className="navbar_account-profile">
         <div className="profile_picture">
            <img src={Profile} alt="" />
         </div>
         <div className="logout_button">
         <LogoutIcon />
         </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar