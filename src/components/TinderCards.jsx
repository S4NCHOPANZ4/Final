import React, {useEffect, useState} from 'react'
import TinderCard from "react-tinder-card"
import database from '../firebase/firebase'

import {addSwipe , fixSwipes} from '../action/addSwipes'
import {useSelector , useDispatch} from 'react-redux'

import '../styles/TinderCards.css'

const TinderCards = () => {

  const swipes = useSelector(state => state.swipes)
  const dispatch = useDispatch()

    const [people, setPeople] = useState([{
      name: "",
      url: "https://www.macmillandictionary.com/us/external/slideshow/thumb/Grey_thumb.png"
    }]);

  useEffect(()=>{
    const unsubscribe = database
    .collection('people').onSnapshot(snapshot =>{

        setPeople(snapshot.docs.map(doc => doc.data()))
    })
    return () =>{
      unsubscribe();
    }
  },[])
  const onSwipe = (direction, name, url) => {

    if(direction === "right"){
      console.log(direction +'__'+ name)
      let id = new Date().getTime()
      dispatch(addSwipe(id, name, url))
      dispatch(fixSwipes())
    }



  }
  return (
    <div>
        <div className='tinderCards__cardContainer'>
          {people.map(person =>(
            <TinderCard 
              onSwipe={(dir)=> onSwipe(dir, person.name ,person.url)}
              className='swipe'
              key={person.name}
              preventSwipe={["up","down"]}
            >
              <div 
                style={{backgroundImage: `url(${person.url})`}}
                className="card"
              >
                <h2>{person.name}</h2>
              </div>
            </TinderCard>
          ))}
        </div>

    </div>
  )
}

export default TinderCards