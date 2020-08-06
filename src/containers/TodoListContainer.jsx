import TodoList from "../components/TodoList";
import {getAllTodos} from "../actions";

const {connect} = require("react-redux");


const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: (data) => dispatch(getAllTodos(data))
    }
};


const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);
export default TodoListContainer