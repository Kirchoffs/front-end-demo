import React from 'react';

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
    const inputTextHandler = (e) => {
        console.log(e.target);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Date.now()
            }
        ]);
        setInputText("");
    }

    const statusHandler = (event) => {
        setStatus(event.target.value);
    }

    return (
        <form>
            <input type="text" value={inputText} className="todo-input" onChange={inputTextHandler} />
            <button type="submit" className="todo-button" onClick={submitTodoHandler}>
                <i className="fa-solid fa-square-plus"></i>
            </button>
            <div className="select">
                <select name="todos" onChange={statusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;