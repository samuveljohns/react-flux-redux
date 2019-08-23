export function addItemR(item){
    return {
        type:'ADD_ITEM',
        item
    }
}
export function remoteItemR(index){
    
    return {
        type:'REMOVE_ITEM',
        index
    }
}