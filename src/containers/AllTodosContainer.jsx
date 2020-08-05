import {connect} from "react-redux";
import AllTodos from "../components/AllTodos";
import {getAllTodos} from "../actions";

const mapStateToProps = (state) => {
    return {
        allTodos: state.allTodos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTodosFromMockAPI: (data) => dispatch(getAllTodos(data))
    }
}

const AllTodosContainer = connect(mapStateToProps, mapDispatchToProps)(AllTodos);
export default AllTodosContainer;