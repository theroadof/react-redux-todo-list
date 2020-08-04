import React from 'react';
import './App.css';
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import DoneListContainer from "./containers/DoneListContainer";
import {HashRouter, Link, Route} from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <header className="App-header">
                <p>Todo List</p>
                <HashRouter>
                    <ul>
                        <li className="App-link"><Link to={"/done-list"}>go to done page</Link></li>
                        <li className="App-link"><Link to={"/"}>show all list</Link></li>
                    </ul>
                    <Route path={"/done-list"} component={DoneListContainer}/>
                    <Route exact path={"/"} render={()=>{
                        return (
                            <div>
                                <TodoListContainer/>
                                <TodoFormContainer/>
                            </div>
                        )
                    }}/>
                </HashRouter>
            </header>
        </React.Fragment>
    );
}

export default App;
