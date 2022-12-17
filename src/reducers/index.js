import users from "./AddUser";
import {combineReducers} from 'redux'
import swipes from "./AddSwipes";

const allReducers = combineReducers({
    users,
    swipes
})

export default allReducers;