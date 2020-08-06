import React from "react";
import 'antd/dist/antd.css';
import {Input, Button, Space} from "antd";
import TodoListApi from "../../model/axios";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        if (this.state.text.length === 0) {
            return
        }
        TodoListApi.createTodo({
            text: this.state.text,
            status: true
        }).then((response) => {
            this.props.addTodo(response.data.id,this.state.text);
            this.setState({
                text: ''
            })
        })
    }

    handleChange({target}) {
        this.setState({
            text: target.value
        })
    }

    render() {
        return (
            <div className="App">
                <Space>
                    <Input style={{width: 200}} value={this.state.text} onChange={this.handleChange}
                           placeholder="write something to do"/>
                    <Button type="primary" onClick={this.handleSubmit}>submit</Button>
                </Space>
            </div>
        )
    }
}

export default TodoForm;