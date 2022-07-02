import { ADD_COUNT } from "./action"

let init = 0;
export const reducer = (state ={auth : false},{type}) =>{
    console.log(state)
    switch(type){
        case ADD_COUNT :
        return {
           ...state,  count : state.count+1,
        }
        case "AUTH" :
        return {
           ...state, auth :  !state.auth
        }
        default : {
            return state;
        }
    }
}