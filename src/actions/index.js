import {ADD_TODO} from "../constants/actionTypes";

export const addTodo=(text)=>(
    {
        type:ADD_TODO,
        text
    }
)