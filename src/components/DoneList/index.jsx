import * as React from "react";
import TodoContainer from "../../containers/TodoContainer";

class DoneList extends React.Component {
    render() {
        return (
            <div className={"App"}>
                {this.props.doneList.map((todo, index) =>
                    <TodoContainer key={index} todo={todo} />)}
            </div>
        )
    }
}

export default DoneList