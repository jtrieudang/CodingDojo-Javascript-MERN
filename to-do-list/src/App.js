import React, { useState } from 'react';
// import logo from './logo.svg';
import Task from './components/task'
import Input from './components/Input'
import './App.css';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      {list.map((task, i)=> (
        <Task task={task} setList={setList} index={i} list={list} />
      ))}
      <Input list={list} setList={setList} />
    </div>
  );
}

export default App;
