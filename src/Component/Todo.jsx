import React from 'react'
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? 'completed' : 'incompleted'}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div>
        <MdModeEdit  className="edit-icon"  onClick={() => editTodo(task.id)} />
        <FaTrashAlt className="delete-icon" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;