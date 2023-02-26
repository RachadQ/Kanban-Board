import React from "react";

import "./App.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  const [draggingTaskId, setDraggingTaskId] = useState(null);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', status: 'todo' },
    { id: 2, title: 'Task 2', status: 'todo' },
    { id: 3, title: 'Task 3', status: 'todo' },
    { id: 4, title: 'Task 4', status: 'todo' },
    { id: 5, title: 'Task 5', status: 'todo' },
    { id: 6, title: 'Task 6', status: 'in-progress' },
    { id: 7, title: 'Task 7', status: 'in-progress' },
    { id: 8, title: 'Task 8', status: 'in-progress' },
    { id: 9, title: 'Task 9', status: 'in-progress' },
    { id: 10, title: 'Task 10', status: 'in-progress' },
    { id: 11, title: 'Task 11', status: 'done' },
    { id: 12, title: 'Task 12', status: 'done' },
    { id: 13, title: 'Task 13', status: 'done' },
    { id: 14, title: 'Task 14', status: 'done' },
    { id: 15, title: 'Task 15', status: 'done' },
    { id: 16, title: 'Task 16', status: 'todo' },
  ]);

  const onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, status) => {
    const id = e.dataTransfer.getData('id');

    const updatedTasks = tasks.map((task) => {
      if (task.id === parseInt(id)) {
        return { ...task, status };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const renderTasks = (status) => {
    return tasks
    .filter((task) => task.status === status)
    .map((task) => (
      <div
        key={task.id}
        className={`task ${task.id === draggingTaskId ? 'dragging' : ''}`}
        draggable
        onDragStart={(e) => {
          onDragStart(e, task.id);
          setDraggingTaskId(task.id);
        }}
        onDragEnd={() => setDraggingTaskId(null)}
      >
        {task.title}
      </div>
    ));
  };



  return (
    <>
      <div class="container text-center">
        <div class="jumbotron">
          <h1>Kanban Board</h1>
        </div>

        <nav class="nav">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
          <a class="nav-link" href="#">Hire </a>
          <a class="nav-link" href="#">Me</a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Today</a>
        </nav>

        

        </div><div className="table">
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='column'>
                <h2>To Do</h2>
                <div className='box'>
                  <div className='dropzone' onDragOver={onDragOver} onDrop={(e) => onDrop(e, 'todo')}>
                    {renderTasks('todo')}
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='column'>
                <h2>In Progress</h2>
                <div className='box'>
                  <div className='dropzone' onDragOver={onDragOver} onDrop={(e) => onDrop(e, 'in-progress')}>
                    {renderTasks('in-progress')}
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='column'>
                <h2>Done</h2>
                <div className='box'>
                  <div className='dropzone' onDragOver={onDragOver} onDrop={(e) => onDrop(e, 'done')}>
                    {renderTasks('done')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <footer class="bg-dark text-light">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h4>About Me</h4>
     
        <p>I am a junior full stack developer looking forward to joining your team. check out my other project where i create a full stack app using express, handlebars, pagination, MongoDB, Restful API. That i deploy to render.com <a href="https://itec4020-a3-superhero-0fkg.onrender.com/"> source</a>.</p>
      </div>
      <div class="col-md-6">
        <h4>Contact Me</h4>
        <ul class="list-unstyled">
          <li>6950 Tenth Line West</li>
          <li>Ontario, Canada</li>
          <li>Phone: (647) 464 1710 </li>
          <li>Email: rachadlamar@live.com</li>
        </ul>
      </div>
    </div>
   
    <div class="row">
      <div class="col-md-12">
        <p>&copy; 2023 My Website</p>
      </div>
    </div>
  </div>
</footer>
      </>
     
);  
}

export default App;





