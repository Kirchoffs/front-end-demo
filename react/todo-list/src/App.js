import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterHandler = () => {
        switch(status) {
            case 'completed': 
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted': 
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") !== null) {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    return (
        <div className="App">
            <header>
                <p><strong>Todo List</strong></p>
            </header>
            <Form 
                inputText={inputText} 
                setInputText={setInputText} 
                todos={todos} 
                setTodos={setTodos}
                setStatus={setStatus}
            />
            <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
        </div>
    );
}

export default App;
