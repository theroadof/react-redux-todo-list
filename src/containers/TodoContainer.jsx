import Todo from "../components/Todo";
import {deleteTodo} from "../actions";


const {connect} = require("react-redux");


const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
}

const TodoContainer = connect(null, mapDispatchToProps)(Todo)
export default TodoContainer