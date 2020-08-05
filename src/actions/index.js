import {
    ADD_TODO,
    DELETE_TODO, GET_ALL_TODOS,
    MARK_CANCEL,
    MARK_DONE,
} from "../constants/actionTypes";

export const addTodo = (text) => (
    {
        type: ADD_TODO,
        text
    }
);
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
});

export const markDone = (id) => ({
    type: MARK_DONE,
    id
});

export const markCancel = (id) => ({
    type: MARK_CANCEL,
    id
});



export const getAllTodos = (allTodos) =>({
    type: GET_ALL_TODOS,
    allTodos
});