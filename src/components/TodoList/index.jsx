import React from "react";
import PropTypes from 'prop-types'
import TodoContainer from "../../containers/TodoContainer";
import TodoListApi from "../../model/axios";

class TodoList extends React.Component {
    componentWillMount() {
        TodoListApi.getAllTodos().then((response) => {
            let allTodos = response.data;
            this.props.getTodos(allTodos)
        });
    }

    render() {
        console.log(this.props.todoList)
        return (<div className={"todo-list"}>
            {this.props.todoList.map(
                (todo, index) => <TodoContainer key={index} todo={todo}/>
            )}
        </div>)
    }
}

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired
};
export default TodoList;