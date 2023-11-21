import React, { useState, useEffect } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const [isCompleted, setCompleted] = useState(task.completed);
  const [colorClass, setColorClass] = useState('');

  useEffect(() => {
    const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8'];
    const randomColorClass = colors[Math.floor(Math.random() * colors.length)];
    setColorClass(randomColorClass);
  }, []);

  const handleCompleteClick = () => {
    setCompleted(!isCompleted);
    onCompleteTask(task.id);
  };

  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className={`task-item-container ${colorClass} ${isCompleted ? 'completed' : ''}`}>
      <span className="task-item-text">{task.name}</span>
      <div>
        <button
          className={`complete-button ${isCompleted ? 'completed' : ''}`}
          onClick={handleCompleteClick}
        >
          ✅
        </button>
        <button className="delete-button" onClick={handleDeleteClick}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;