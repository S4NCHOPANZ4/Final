import React from 'react'
//css
import "../styles/header.css"
// material UI imports
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <Link to="/user">
          <IconButton>
              <PersonIcon className='header__icon'/>
          </IconButton>
        </Link>
        <Link to="/swipes">
          <img src="https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo-253x300.png"
          alt="tinder-logo"
          className='header__logo' />
        </Link>

        <Link to="/chats">
          <IconButton>
              <SendIcon className='header__icon'/>
          </IconButton>
        </Link>

    </div>
  )
}

export default Header