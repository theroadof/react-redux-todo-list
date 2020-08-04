import TodoForm from "../components/TodoForm";
import {addTodo} from "../actions";
import {connect} from "react-redux"

const mapDispatchToProps = (dispatch)=>({
    addTodo:(text)=>dispatch(addTodo(text))
})
const TodoFormContainer = connect(null,mapDispatchToProps)(TodoForm)
export default TodoFormContainer