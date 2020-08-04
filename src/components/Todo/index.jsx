import React from "react";
import PropTypes from 'prop-types';

class Todo extends React.Component {
    handleDelete = () => (this.props.deleteTodo(this.props.key))

    render() {
        return <div className={"todo"}>
            <span>{this.props.text}</span>
            <button onClick={this.handleDelete}>x</button>
        </div>
    }
}

Todo.propsTypes = {
    text: PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
export default Todo