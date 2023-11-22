import React, { useState, useEffect } from 'react';
import TaskList from './components/Tasklist';
import TaskForm from './components/Taskform';
import './app.css';
import Header from './components/Header';
import '../src/components/taskitem.css';


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    // Agregar la clase de animación antes de eliminar la tarea
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    // Puedes realizar otras tareas, como limpiar el local storage si es necesario
  
    
    
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-content">
        <div className="titulo">
          <h1>Tareas del día</h1>
        </div>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onCompleteTask={handleCompleteTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default App;