import {GET_ALL_TODOS, MARK_CANCEL, MARK_DONE} from "../constants/actionTypes";

const allTodos = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_TODOS:
            return action.allTodos
        // case MARK_DONE:
        //     state[action.id].status = false
        //     return [...state]
        // case MARK_CANCEL:
        //     state[action.id].status = true;
        //     return [...state]
        default:
            return state
    }
};

export default allTodos;