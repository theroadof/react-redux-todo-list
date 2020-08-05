import React from "react";
import PropTypes from 'prop-types';
import todoStatus from "../../constants/todoStatus";
import './index.css'
import {DeleteOutlined} from "@ant-design/icons"
import {Card , Space} from "antd";

class Todo extends React.Component {
    handleDelete = (e) => {
        e.stopPropagation();
        this.props.deleteTodo(this.props.id)
    };

    handleMark = () => {
        if (this.props.status === todoStatus.TRUE) {
            this.props.markDone(this.props.id)
        } else {
            this.props.markCancel(this.props.id)
        }
    };

    render() {
        return <div className={`todo${this.props.status === todoStatus.TRUE ? '' : ' is-done'}`}
                    onClick={this.handleMark}>
            <Space direction="horizontal" >
                <Card hoverable={true} size={"small"} bodyStyle={{color:"white",backgroundColor:"#1890ff"}}	>{this.props.text}</Card>
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