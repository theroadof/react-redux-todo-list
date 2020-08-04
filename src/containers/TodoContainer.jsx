import Todo from "../components/Todo";
import {deleteTodo, markCancel, markDone} from "../actions";


const {connect} = require("react-redux");


const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        markDone: (id)=>dispatch(markDone(id)),
        markCancel: (id)=>dispatch(markCancel(id))
    }
}

const TodoContainer = connect(null, mapDispatchToProps)(Todo)
export default TodoContainer