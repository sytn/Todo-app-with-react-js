import React, { useState } from "react";

const TodoApp = () => { 
    const [todoValue, setTodoValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setTodoValue(e.target.value);
    };

    const handleButtonClick = () => { 
        const newTodo = {
            id: new Date().getTime(),
            text: todoValue,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTodoValue("");
    };
    <>
        {todos.map((todo) => (
            <div key={todo.id}>{todo.text}</div>
        ))}
    </>
};

export default TodoApp;