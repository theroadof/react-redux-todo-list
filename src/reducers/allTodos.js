import {GET_ALL_TODOS} from "../constants/actionTypes";

const allTodos = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_TODOS:
            return action.allTodos
        default:
            return state
    }
};

export default allTodos;