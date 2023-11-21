import React from 'react';
import TaskItem from './TaskItem';
import './tasklist.css';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;