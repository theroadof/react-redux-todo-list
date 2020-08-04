import React from "react";
import PropTypes from 'prop-types';
import todoStatus from "../../constants/todoStatus";
import './index.css'

class Todo extends React.Component {
    handleDelete = (e) => {
        e.stopPropagation()
        this.props.deleteTodo(this.props.id)
    }

    handleMark = (e) => {
        if (this.props.status === todoStatus.DOING) {
            this.props.markDone(this.props.id)
        } else {
            this.props.markCancel(this.props.id)
        }
    }

    render() {
        return <div className={`todo${this.props.status === todoStatus.DOING ? '' : ' is-done'}`}
                    onClick={this.handleMark}>
            <span>{this.props.text}</span>
            <span className={'delete'} onClick={this.handleDelete}>x</span>
        </div>
    }
}

Todo.propsTypes = {
    text: PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
export default Todo