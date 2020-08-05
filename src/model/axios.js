import axios from "axios";

const TODO_LIST_API_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos";

class TodoListApi {
    static getAllTodos() {
        return axios.get(TODO_LIST_API_URL).then((response)=>{
            return response
        });
    }

    static updateTodoById(id) {
        return axios.put(`${TODO_LIST_API_URL}/${id}}`);
    }

    static createTodo(todo) {
        return axios.post(TODO_LIST_API_URL, todo);
    }

    static deleteTodoById(id) {
        return axios.delete(`${TODO_LIST_API_URL}/${id}`);
    }
}

export default TodoListApi;