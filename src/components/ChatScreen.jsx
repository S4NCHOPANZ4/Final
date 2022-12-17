import React, {useState} from 'react'

import '../styles/chats.css'

//Material UI
import Avatar from '@mui/material/Avatar';

const ChatScreen = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
        name: 'PUTA',
        url: '...',
        messages: "zorra :hearth"
    },
    {
        name: 'PUTA',
        url: '...',
        messages: ":D"
    },
    {
      messages: 'a'

    }

  ]) 
  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, {messages: input}])
    setInput("")
  }
  return (
    <div className='chatScreen'>
        <p className='chatScreen__timestamp'>You Have Matched with Tilina</p>
        {messages.map(message =>
            message.name ?(
            <div className='chatScreen__message'>
                <Avatar
                className='chatScreen__image'
                alt={message.name}
                src={message.url}
                />
                <p className='chatScreen__text'>{message.messages}</p>
            </div>
            ):(
              <div className='chatScreen__message'>
                <p className='chatScreen__textUser'>
                  {message.messages}
                </p>
              </div>
            )   
        )}
        <form action="" className='chatScreen__input'>
          <input 
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text" 
          className='chatScreen__inputField'
          placeholder='Type a message...'
          />
          <button
          onClick={handleSend}
          type='submit' 
          className='chatScreen__inputButton'>SEND</button>
        </form>

    </div>
  )
}

export default ChatScreen