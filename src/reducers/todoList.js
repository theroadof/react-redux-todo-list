import todoStatus from "../constants/todoStatus";
import {ADD_TODO, DELETE_TODO, GET_ALL_TODOS, MARK_CANCEL, MARK_DONE} from "../constants/actionTypes";

const todoList = (state = [], action) => {
    let newState;
    switch (action.type) {
        case MARK_DONE:
            state.map(todo=>{
                if(todo.id === action.id){
                    todo.status = todoStatus.FALSE;
                    return todo
                }
                return todo;
            });
            newState=JSON.parse(JSON.stringify(state));
            return newState;
        case MARK_CANCEL:
            state.map(todo=>{
                if(todo.id === action.id){
                    todo.status = todoStatus.TRUE;
                    return todo
                }
                return todo;
            });
            newState=JSON.parse(JSON.stringify(state));
            return newState;
        case ADD_TODO:
            return [...state, {id:action.id, text: action.text, status: todoStatus.TRUE}];
        case DELETE_TODO:
            return state.filter(todo=>(
                todo.id !== action.id
            ));
        case GET_ALL_TODOS:
            return action.allTodos;
        default:
            return state
    }
};
export default todoList