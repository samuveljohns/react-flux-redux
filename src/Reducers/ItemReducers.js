/**
 * 
 * Initial States
 * 
 */

let initialStates = {
    items:["item added on " + new Date().getTime()]
}

export default function(state=initialStates.items, action){
    let {type, payload} = action;
    switch(type){
        case "ADD_ITEM":
            return [...state,payload];
        case "REMOVE_ITEM":
            state.splice(payload,1);  //payload is index from where item has to be removed
            return JSON.parse(JSON.stringify(state));
        default:
            return state;
    }
}