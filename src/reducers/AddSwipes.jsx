const swipes = (state = [], action)=>{
    switch (action.type) {
        case 'ADD_SWIPES':
            const newSwipe = {
                id: action.payload.id,
                name: action.payload.name,
                url: action.payload.url
            }
         
            
            
            return[
                ...state,
                newSwipe
            ]   
        case 'FIX_SWIPES':
            let hash = {};
            let arraySwipes = state.filter(o => hash[o.name] ? false : hash[o.name] = true);
            return arraySwipes;

        
        default:
            return state
    }
}
export default swipes