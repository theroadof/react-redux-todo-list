import React from "react";
import 'antd/dist/antd.css';
import {Input,Button} from "antd";

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
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        })
    }

    handleChange({target}) {
        this.setState({
            text: target.value
        })
    }

    render() {
        return (
            <div>
                <Input style={{ width: 200 }} value={this.state.text} onChange={this.handleChange}
                       placeholder="write something to do"/>
                <Button type="primary" onClick={this.handleSubmit} >submit</Button>
            </div>
        )
    }
}

export default TodoForm;