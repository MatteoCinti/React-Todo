import { useState } from 'react'
import { connect } from 'react-redux';

// Import files and CSS
import './todo-list.styles.scss';

import { setNewToDo, setCompletedToDo } from "../../redux/todos/todos.actions"
import { getLists } from '../../redux/todos/todos.selectors'

// Import components
import Button from "../button/button.component"
import Input from "../input/input.component"

const ToDoList = (props) => {
   // Setting Local Input Value
   let [newToDoName, setNewToDoName] = useState('') 

   // Getting Active Lists Data
   const selectedToDoData = props.todoLists.filter(list => list.isActive).map(list => list.data).pop()
  
   const handleChange = (e) => {
      setNewToDoName(e.target.value)
   }

   const handleClick = (tociaodo) => {
      props.setCompletedToDo(tociaodo)
   }


   return(
      <div className="todo-list">
         
         <div className="todo-header">
            <h2 className="todo-title">Youtube</h2>
            <p className="task-count">3 tasks remaining</p>
         </div>
         {/* /todo-header */}

         <div className="todo-body">
            <div className="tasks">

               {selectedToDoData.map((todo, index) => (
                     <div className="task" key={index}>
                        <Input type="checkbox" className="to-do" id={`task-${index+1}`} label={todo.label} handleClick={ () => handleClick(index)}/>
                     </div>
                  )
               )}

            </div>
            {/* /tasks */}

            <div className="new-task-creator">
               <form action="">
                  <Input 
                     type="text" 
                     className="new-input task-input"
                     placeholder="New Task Name"
                     value={newToDoName}
                     handleChange={handleChange}
                  />
                  <Button 
                     className="task-button create" 
                     aria-label="create new task"
                     newElementName={newToDoName} 
                     handleClick={(e, newToDoName) => {
                        props.setNewToDo({e, newToDoName});
                        setNewToDoName('');
                        }
                     }>+</Button>
               </form>
            </div>

            <div className="delete-tasks">
               <Button className="delete">Clear completed tasks</Button>
               <Button className="delete">Delete List</Button>
            </div>
         </div>
         {/* /todo-body */}
      </div>
)}
const mapStateToProps = state => ({
   todoLists: getLists(state)
})


const mapDispatchToProps = dispatch => ({
      setNewToDo: payload => dispatch(setNewToDo(payload)),  
      setCompletedToDo: payload => dispatch(setCompletedToDo(payload))  
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);