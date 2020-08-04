import React from "react";
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }

        this.handleChang = this.handleChang.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        //todo
        this.setState({
            text:''
        })
    }

    handleChange({target}) {
        this.setState({
            text: target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="write something to do"/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default TodoForm;