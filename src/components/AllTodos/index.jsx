import React from "react";
import TodoListApi from "../../model/axios";
import TodoContainer from "../../containers/TodoContainer";
import todoStatus from "../../constants/todoStatus";

class AllTodos extends React.Component{
    componentWillMount() {
        TodoListApi.getAllTodos().then((response)=>{
            let allTodos = response.data
            this.props.getAllTodosFromMockAPI(allTodos)
        });
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.allTodos.map((todo,index)=>
                    <TodoContainer key={index} id={todo.id} text={todo.content} status={`${todo.status === true?todoStatus.DOING:todoStatus.DONE}`} />
                )}
            </div>
        )
    }
}

export default AllTodos;