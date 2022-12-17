export const addPerson = (id, name, password,url)=>{
    return{
        type: 'ADD_PERSON',
        payload:{
            id,
            name,
            password,
            url
        }
    }
}
export const delPerson = (id=1) =>{
    return{
        type: 'DELETE_PERSON',
        payload: id
    }
}