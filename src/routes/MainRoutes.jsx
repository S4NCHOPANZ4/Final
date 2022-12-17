import React, {useState} from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Chats from '../components/Chats'
import ChatScreen from '../components/ChatScreen'
import { CreateAcc } from '../components/CreateAcc'
import Header from '../components/Header'
import MainPage from '../components/MainPage'
import Profile from '../components/Profile'
import SignAcc from '../components/SignAcc'


const MainRoutes = () => {

  const [logged, setLogged] = useState(false)

  return (
    <BrowserRouter>
    {logged && <Header/> }
        <Routes>
            <Route path='/chats' element={<Chats/>}/>
            <Route path='/chats/:person' element={<ChatScreen/>} />
            <Route path='/user' element={<Profile/>}/>
            <Route path='/swipes' element={<MainPage/>}/>
            <Route path='/login' element={<SignAcc/>}/>
            <Route path='/' element={<CreateAcc setLogg={setLogged}/>}/>
        </Routes>    
    </BrowserRouter>

  )
}

export default MainRoutes