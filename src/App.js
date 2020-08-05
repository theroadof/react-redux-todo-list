import React from 'react';
import './App.css';
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import DoneListContainer from "./containers/DoneListContainer";
import {HashRouter, Link, Route} from "react-router-dom";
import AllTodosContainer from "./containers/AllTodosContainer";

function App() {
    return (
        <React.Fragment>
            <HashRouter>
                <header className="App-header">
                    <p>Todo List</p>
                    <ul>
                        <li className="App-link"><Link to={"/done-list"}>go to done page</Link></li>
                        <li className="App-link"><Link to={"/"}>go to list page</Link></li>
                        <li><Link to={"/all-list"}>get all list</Link></li>
                    </ul>
                    <Route path={"/done-list"} component={DoneListContainer}/>
                    <Route exact path={"/"} render={() => {
                        return (
                            <div>
                                <TodoListContainer/>
                                <TodoFormContainer/>
                            </div>
                        )
                    }}/>
                    <Route path={"/all-list"} render={()=>{
                        return (
                            <div>
                                <AllTodosContainer/>
                            </div>
                        )
                    }}/>
                </header>
            </HashRouter>
        </React.Fragment>
    );
}

export default App;
