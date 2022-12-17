const users = (state = {}, action)=>{
    switch (action.type) {
        case 'ADD_PERSON':
            const newUser = {
                id: action.payload.id,
                name: action.payload.name,
                password: action.payload.password,
                url: action.payload.url
            }

            return newUser
        default:
            return state
    }
}
export default users