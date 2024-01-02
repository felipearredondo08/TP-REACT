import React, { useState, useEffect } from 'react';
import TaskList from './components/Tasklist';
import TaskForm from './components/Taskform';
import './app.css';
import Header from './components/Header';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    setLoading(false); // Marcar que la carga ha finalizado
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className={`app-wrapper ${tasks.length === 0 ? 'no-tasks' : ''}`}>
      <Header />
      <div className="app-content">
        <div className="titulo">
          <h1>Tareas del día</h1>
        </div>
        {loading ? (
          <p>Cargando tareas...</p>
        ) : (
          <>
            <TaskForm onAddTask={handleAddTask} />
            <TaskList
              tasks={tasks}
              onCompleteTask={handleCompleteTask}
              onDeleteTask={handleDeleteTask}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;