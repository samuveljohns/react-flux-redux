/**
 * 
 * Initial States
 * 
 */

let initialStates = {
    items:["yogendra"]
}

export default function(state=initialStates.items, action){
    let {type, payload} = action;
    switch(type){
        case "ADD_ITEM":
            return [...state,payload];
        case "REMOVE_ITEM":
            return [...state,payload];
        default:
            return state;
    }
}