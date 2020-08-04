import React from "react";
import PropTypes from 'prop-types'
import Todo from "../Todo";

class TodoList extends React.Component {
    render() {
        return (<div className={"todo-list"}>
            {this.props.todoList.map(
                (todo, index) => <Todo key={index} text={todo}/>
            )}
        </div>)
    }
}

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired
}
export default TodoList;