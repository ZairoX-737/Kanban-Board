import React from 'react'
import '..//App.css';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('TASKS')) || []
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem('TASKS', JSON.stringify(tasks))
  }, [tasks])

  return (
    <BrowserRouter>
      <>
        <Header />
        <Main tasks={tasks} setTasks={setTasks}/>
        <Footer tasks={tasks}/> 
      </>
    </BrowserRouter>
  );
}

export default App;
