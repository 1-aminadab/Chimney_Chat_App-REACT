import React from 'react'
//* Components


import Navbar from '../components/Navbar'
import Chat from '../components/Chat'
import './Home.css'
import {peopleData} from '../../src/PeopleData'
    

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Chat/>
    </div>
  )
}

export default Home