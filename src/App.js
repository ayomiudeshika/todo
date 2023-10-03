import logo from './logo.svg';
import './App.css';
import Taskform from './Components/Taskform';
import Tasks from './Components/Task';
import React,{ useState,useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState( []);
  
  function addTask(name){
    setTasks((prev)=>{
      return[...prev,{name:name, done:false}];
    });

  }
  return (
    <main>
      <Taskform onAdd={addTask }/>
      {tasks.map(tasks=>(
        <Tasks {...tasks}/>
      ))}
    </main>
  );
}

export default App;
