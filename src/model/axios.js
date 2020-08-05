import axios from "axios";

const TODO_LIST_API_URL = "http://localhost:8800/todos";

class TodoListApi {
    static getAllTodos() {
        return axios.get(TODO_LIST_API_URL).then((response)=>{
            return response
        });
    }

    static updateTodoById(id,todo) {
        return axios.put(`${TODO_LIST_API_URL}/${id}}`,todo);
    }

    static createTodo(todo) {
        return axios.post(TODO_LIST_API_URL, todo);
    }

    static deleteTodoById(id) {
        return axios.delete(`${TODO_LIST_API_URL}/${id}`);
    }
}

export default TodoListApi;