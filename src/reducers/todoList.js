import todoStatus from "../constants/todoStatus";
import {ADD_TODO, DELETE_TODO} from "../constants/actionTypes";
/*
{
    text:"example todo",
    status:todoStatus.DOING
}
 */
const todoList= (state = [],action)=>{
    switch (action.type){
        case ADD_TODO:
            return [...state,{text:action.text,status: todoStatus.DOING}]
        case DELETE_TODO:
            state.splice(action.id,1)
            return [...state]
        default:
            return state
    }
}
export default todoList