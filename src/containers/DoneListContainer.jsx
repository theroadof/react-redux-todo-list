import {connect} from "react-redux";
import DoneList from "../components/DoneList";
import todoStatus from "../constants/todoStatus";

const mapStateToProps = (state) => {
    return {
        doneList: state.todoList.filter(todo => (todo.status === todoStatus.FALSE))
    }
};

const DoneListContainer = connect(mapStateToProps)(DoneList);
export default DoneListContainer