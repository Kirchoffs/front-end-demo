import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((element) => {
            if (element.id === todo.id) {
                return {
                    ...element,
                    completed: !element.completed
                }
            }

            return element;
        }));
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="completed-btn" onClick={completeHandler}><i className="fa-solid fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandler}><i className="fa-solid fa-trash"></i></button>
        </div>
    );
}

export default Todo;