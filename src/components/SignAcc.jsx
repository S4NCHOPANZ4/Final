import React, {useEffect} from 'react'

import { SaveStorage } from '../helpers/SaveStorage'
import { useNavigate } from 'react-router-dom';
import {Route, Routes, Link} from "react-router-dom"

import {useSelector , useDispatch} from 'react-redux'

import '../styles/createAcc.css'
import { useState } from 'react';

const SignAcc = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile ]  = useState([])


  const validForm = e =>{
    e.preventDefault()
    const data = new FormData(e.currentTarget);
      console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
     
      userProfile.forEach(user=>{
        if(user.name === data.get('name') && user.password === data.get('password')){
            navigate('/swipes');
        }
      });
  }

  
  useEffect(()=>{
    let mov = JSON.parse(localStorage.getItem("users"))
    setUserProfile(mov)
    console.log(mov)
  },[])

  return (
    <div className='create'>
       
        <form onSubmit={validForm} className='create__form'>
                <div className='create__logo'>
                    <img src="https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo-253x300.png"
                    alt="tinder-logo"
                    className='form__logo'/>
                </div>
                <div className='create__nameInput'>
                        <h4 className='create__textTitle'>First Name</h4>
                        <input className='create__Input'
                        type="text" 
                        placeholder='name' 
                        name="name" id='name'/>
                </div>
                <div className='create__passwordInput'>
                    <h4 className='create__textTitle'>Password</h4>
                    <input className='create__Input'
                    type="password" name="password" id="password"
                    placeholder='Password' 
                    />
                </div>
              <div className='create__buttonDiv'>
                 <button
                 className='create__submitButton' 
                 type='submit'>Log In</button>
              </div>
              <Link  to="/" variant="body2">
                <p className='link'>
                {"Don't have an account? Sign Up"}
                </p>
              </Link>
        </form>
    </div>
  )
}

export default SignAcc