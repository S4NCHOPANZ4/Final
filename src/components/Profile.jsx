import { Avatar } from '@mui/material'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import {useSelector , useDispatch} from 'react-redux'



import '../styles/profile.css'


const Profile = () => {
  const swipes = useSelector(state => state.swipes)
  const dispatch = useDispatch()

  const users = useSelector(state => state.users)


  return (
    <>
        <div className='profile__user'>
        <Avatar className='profile__userImage' alt="name" src={users.url}/>
        <h2 className='profile__userName'>{users.name}</h2>
        </div>
        <h2 className='profile__text'>Your Swipes</h2>
        {swipes.map(swipe =>{

          return(
            <div className='swipes' key={swipe.name}>
            <Avatar alt='a'
            src={swipe.url}
            className='profile__swipeImage'/>
            <div className='profile__swipeName'>
                <h2>{swipe.name}</h2>
            </div>
            
            </div>
          )
         
        })}       
          
    </>
  )
}

export default Profile