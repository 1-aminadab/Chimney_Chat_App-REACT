import React from 'react'
//* Components

// import Chat from '../components/Chat'
// import Chats from '../components/Chats'
// import Input from '../components/Input'
// import Message from '../components/Message'
// import Navbar from '../components/Navbar'
// import Search from '../components/Search'
// import Sidebar from '../components/Sidebar'

import Navbar from '../components/Navbar'
import Chat from '../components/Chat'
import './Home.css'


function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Chat/>
    </div>
  )
}

export default Home