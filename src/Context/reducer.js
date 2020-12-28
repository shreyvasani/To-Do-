import {Add_Todo,Remove_Todo} from "./action.types.js"
export default (state,action) => {
    {console.log(state)}
    switch (action.type) {
        case Add_Todo:
            return[...state,action.payload]
        case Remove_Todo:
                return state.filter(todo => todo.id !== action.payload)
            
    
        default:
          return state;
    }
}