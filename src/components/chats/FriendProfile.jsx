import React from 'react'
import FriendProfilePic from '../../images/profilepic.jpg'
function FriendProfile() {
  return (
    <div className='friendprofile'>
      <div className="image">
        <img src={FriendProfilePic} alt="" />
      </div>
      <h2>Tizazu Geremew</h2>
      <div className="all-files">
        <div className="photo file">
            Photo
        </div>
        <div className="pdf file">
            File
        </div>
        <div className="video file">
          Video
        </div>
      </div>
    </div>
  )
}

export default FriendProfile