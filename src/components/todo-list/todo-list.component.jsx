// Import files and CSS
import './todo-list.styles.scss';

// Import components
import Button from "../button/button.component"
import Input from "../input/input.component"

const ToDoList = () => (
   <div className="todo-list">

      <div className="todo-header">
         <h2 className="todo-title">Youtube</h2>
         <p className="task-count">3 tasks remaining</p>
      </div>
      {/* /todo-header */}

      <div className="todo-body">
         <div className="tasks">
            <div className="task">
               <Input type="checkbox" id="task-1" label="Record todo list video"/>
            </div>
            {/* /task-1 */}

            <div className="task">
               <Input type="checkbox" id="task-2" label="Another task"/>
            </div>
            {/* /task-2 */}

            <div className="task">
               <Input type="checkbox" id="task-3" label="Third task" />
            </div>
            {/* /task-3 */}
         </div>
         {/* /tasks */}

         <div className="new-task-creator">
            <form action="">
               <Input 
               type="text" 
               className="new-input task-input"
               placeholder="New Task Name"
               />
               <Button className="task-button create" aria-label="create new task">+</Button>
            </form>
         </div>

         <div className="delete-tasks">
            <Button className="delete">Clear completed tasks</Button>
            <Button className="delete">Delete List</Button>
         </div>
      </div>
      {/* /todo-body */}
   </div>
)

export default ToDoList;