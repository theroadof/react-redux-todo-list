import todoStatus from "../constants/todoStatus";
import {ADD_TODO, DELETE_TODO, MARK_CANCEL, MARK_DONE} from "../constants/actionTypes";

const todoList = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        case MARK_DONE:
            state[action.id].status = todoStatus.FALSE;
            return [...state];
        case MARK_CANCEL:
            state[action.id].status = todoStatus.TRUE;
            return [...state];
        case ADD_TODO:
            return [...state, {id:state.length, text: action.text, status: todoStatus.TRUE}];
        case DELETE_TODO:
            state.splice(action.id, 1);
            return [...state];
        default:
            return state
    }
};
export default todoList