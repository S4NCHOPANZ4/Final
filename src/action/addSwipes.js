export const addSwipe = (id, name, url)=>{
    return{
        type: 'ADD_SWIPES',
        payload:{
            id,
            name,
            url
        }
    }
}
export const fixSwipes = () =>{
    return{
        type: 'FIX_SWIPES'
    }
}
export const delSwipe = (id) =>{
    return{
        type: 'DELETE_SWIPES',
        payload: id
    }
}