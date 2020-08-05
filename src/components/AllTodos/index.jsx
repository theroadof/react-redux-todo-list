import React from "react";
import TodoListApi from "../../model/axios";
import TodoContainer from "../../containers/TodoContainer";

class AllTodos extends React.Component {
    componentWillMount() {
        TodoListApi.getAllTodos().then((response) => {
            let allTodos = response.data;
            this.props.getAllTodosFromMockAPI(allTodos)
        });
    }

    render() {
        console.log(this.props.allTodos)
        return (
            <div>
                {this.props.allTodos.map((todo, index) =>
                    <TodoContainer key={index} id={todo.id} text={todo.text} status={todo.status}/>
                )}
            </div>
        )
    }
}

export default AllTodos;