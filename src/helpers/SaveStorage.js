export const SaveStorage =(key, item) =>{
    let items = JSON.parse(localStorage.getItem(key)); //
    console.log(items)
    if(Array.isArray(items)){
        items.push(item)
    }else{  
        items = [item]
    }
    localStorage.setItem(key, JSON.stringify(items))

    return item
}