import React from 'react'
import { Link } from 'react-router-dom';
//Material UI
import Avatar from '@mui/material/Avatar';

import '../styles/chats.css'

const Chat = ({name, message, profilePic,timestamp}) => {
  return (
    <Link to={`/chats/${name}`}>
    <div className='chat'>
      <Avatar alt={name} 
      src={profilePic}
      className='chat__image'/>
      <div className='chat__details'>
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p>{timestamp}</p>


    </div>
    </Link>
  )
}

export default Chat