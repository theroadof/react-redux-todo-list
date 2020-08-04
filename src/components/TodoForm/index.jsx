import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        if (this.state.text.length === 0) {
            return
        }
        this.props.addTodo(this.state.text)
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
                <input type="text" value={this.state.text} onChange={this.handleChange}
                       placeholder="write something to do"/>
                <input type="submit" onClick={this.handleSubmit} value="submit"/>
            </div>
        )
    }
}

export default TodoForm;