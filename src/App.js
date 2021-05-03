// Import dependencies
import React, { useEffect } from 'react';

// Import components
import AllTasks from "./components/all-tasks/all-tasks.component"
import ToDoList from "./components/todo-list/todo-list.component"

// Import Files and CSS
import './App.scss';

const App = () => {

  // Setting Website Title
  useEffect(() => {    
    document.title = `React Todo App`;  
  }, []);


  return (
    <div className="App">
      <h1 class="title">Stuff I need to do</h1>
      <AllTasks />
      <ToDoList />
    </div>
  );
}

export default App;
