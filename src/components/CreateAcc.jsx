import React from 'react'

import { SaveStorage } from '../helpers/SaveStorage'
import { useNavigate } from 'react-router-dom';

import {addPerson} from '../action/addUser'

import {Route, Routes, Link} from "react-router-dom"
import {useSelector , useDispatch} from 'react-redux'



import '../styles/createAcc.css'
export const CreateAcc = ({setLogg}) => {


  //redux
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()


  const navigate = useNavigate();
  setLogg(false)


  const createAcount = e =>{
    e.preventDefault();
    let target = e.target;
    let name = target.name.value;
    let password = target.password.value;
    let url = target.url.value;
    let id =  new Date().getTime()

    let user ={
      name,
      password,
      url,
      id

    }
    SaveStorage('users', user);
    dispatch(addPerson(id,name, password, url))

    console.log(users)
    navigate('/swipes');
    setLogg(true)
    
  }

  return (
    <div className='create'>
       
        <form onSubmit={createAcount} className='create__form'>
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
                <div className='create__imageUrl'>
                    <h4 className='create__textTitle'>Profile Picture</h4>
                    <input className='create__Input'
                    type="text" name="url" id="url"
                    placeholder='Insert Url' 
                    />
                </div>
              <div className='create__buttonDiv'>
                 <button
                 className='create__submitButton' 
                 type='submit'>Submit</button>
              </div>
              <Link  to="/login" variant="body2">
                <p className='link'>
                {"Already have an account? Sign In"}
                </p>
              </Link>
        </form>
    </div>
  )
}
