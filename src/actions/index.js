import {
    ADD_TODO,
    DELETE_TODO,
    MARK_CANCEL,
    MARK_DONE,
    SHOW_ALL_TODO_LIST,
    SHOW_DONE_TODO_LIST
} from "../constants/actionTypes";

export const addTodo = (text) => (
    {
        type: ADD_TODO,
        text
    }
)
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const markDone = (id) => ({
    type: MARK_DONE,
    id
})

export const markCancel = (id) => ({
    type: MARK_CANCEL,
    id
})

export const showDone = () => ({
    type: SHOW_DONE_TODO_LIST
})