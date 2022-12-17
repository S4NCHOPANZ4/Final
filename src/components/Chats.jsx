import React from 'react'

import '../styles/chats.css'
import Chat from './Chat'


const Chats = () => {
  return (
    <div className='chats'>
      <Chat
      name="Tilina <3"
      message="What Up"
      timestamp="34 mins ago"
      profilePic="https://i.pinimg.com/280x280_RS/5e/99/a4/5e99a4fabbfdbd7f64159b2e5eb2afbe.jpg"
      />      
    </div>
  )
}

export default Chats