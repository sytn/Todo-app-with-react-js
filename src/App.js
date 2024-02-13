import './App.css';
import React, { useState } from 'react';
import TodoApp from './addTodo';

function App() {
  const [todoValue, setTodoValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleButtonClick = () => {
    // Check if the input is not empty before adding it to the list
    if (todoValue.trim() !== '') {
      setTodoList([...todoList, todoValue]);
      setTodoValue(''); // Clear the input after adding to the list
    } else {
      alert('please enter value.');
    }
  };

  const handleDeleteClick = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <div className="App">
      <header className='header'>
        <div className='newTodoContainer'>
          <h2 className='newTodoText'>New TODO</h2>
          <input
            type='text'
            placeholder='Enter New Task'
            id='textBox'
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <button
            className='addTaskBtn btn'
            onClick={handleButtonClick}
          >
            Add Task
          </button>
        </div>
      </header>

      <div className='todoListContainer'>
        <h2 className='todoListText'>Todo List</h2>
        <ul>
          {todoList.map((task, index) => (
            <li key={index}>
              {task}
              <button className='deleteBtn' onClick={() => handleDeleteClick(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <TodoApp task={todoValue} />
    </div>
  );
}

export default App;
