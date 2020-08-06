import React from "react";
import PropTypes from 'prop-types';
import todoStatus from "../../constants/todoStatus";
import './index.css'
import {DeleteOutlined} from "@ant-design/icons"
import {Card, Space} from "antd";
import TodoListApi from "../../model/axios";

class Todo extends React.Component {
    handleDelete = (e) => {
        e.stopPropagation();
        this.props.deleteTodo(this.props.todo.id)
    };

    handleMark = () => {
        if (this.props.todo.status === todoStatus.TRUE) {
            this.props.markDone(this.props.todo.id)
        } else {
            this.props.markCancel(this.props.todo.id)
        }
    };

    render() {
        return <div className={`todo${this.props.todo.status === todoStatus.TRUE ? '' : ' is-done'}`}
                    onClick={this.handleMark}>
            <Space direction="horizontal">
                <Card hoverable={true} size={"small"}
                      bodyStyle={{color: "white", backgroundColor: "#1890ff"}}>{this.props.todo.text}</Card>
                <DeleteOutlined onClick={this.handleDelete} style={{color: "#1890ff"}}/>
            </Space>
        </div>
    }
}

Todo.propsTypes = {
    text: PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired
};
export default Todo