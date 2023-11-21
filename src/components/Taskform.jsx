import React, { useState } from 'react';
import './taskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      onAddTask({ id: Date.now(), name: taskName, completed: false });
      setTaskName('');
    }
  };

  return (
    <form className="task-form-container" onSubmit={handleSubmit}>
      <input className="task-form-input" type="text" value={taskName} onChange={handleInputChange} />
      <button className="task-form-button" type="submit"><p>Agregar</p></button>
    </form>
  );
};

export default TaskForm;