import React from "react";
import PropTypes from 'prop-types';
class Todo extends React.Component{
    render() {
        return <div>
            {this.props.text}
        </div>
    }
}
Todo.propsTypes = {
    text:PropTypes.string.isRequired
}
export default Todo