import {combineReducers} from "redux";
import todoList from "./todoList";
import allTodos from "./allTodos";

const reducer = combineReducers({
    todoList,
    allTodos
});

export default reducer;