import React from 'react';
import './App.css';
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import DoneListContainer from "./containers/DoneListContainer";

function App() {
    return (
            <div className="App">
                <header className="App-header">
                    <h2>Todo List</h2>
                    <TodoListContainer/>
                    <TodoFormContainer/>
                    <DoneListContainer/>
                </header>
            </div>
    );
}

export default App;
