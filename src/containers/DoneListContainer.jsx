import {connect} from "react-redux";
import DoneList from "../components/DoneList";
import todoStatus from "../constants/todoStatus";

const mapStateToProps = (state) => {
    console.log(state)
    return {
        doneList: state.todoList.filter(todo => (todo.status === todoStatus.DONE))
    }
}

const DoneListContainer = connect(mapStateToProps)(DoneList)
export default DoneListContainer