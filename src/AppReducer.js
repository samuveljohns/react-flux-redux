// appReducer.js

// Set the initial state to be used
const initialState = {
    items: ["yogi"]
};

// define and export reducer
export default function appReducer(state = initialState, action) {
    console.log(action)
    // handle action's results
    switch (action.type) {

        case 'REMOVE_ITEM':
            console.log(action)
            state.items.splice(action.index,1);
            return {
                items: JSON.parse(JSON.stringify(state.items))
            };
        // Set the result of the async request to state
        case 'ADD_ITEM':
            return {
                items: [...state.items,action.item]
            };
    

        // Toggles the direction of the results


        // return the default state if no action was found
        default:
            return state;
    }
}