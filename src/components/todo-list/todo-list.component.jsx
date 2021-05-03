// Import files and CSS
import './todo-list.styles.scss';

// Import components
import Button from "../button/button.component"
import Input from "../input/input.component"

const ToDoList = () => (
   <div class="todo-list">

      <div class="todo-header">
         <h2 class="list-title">Youtube</h2>
         <p class="task-count">3 tasks remaining</p>
      </div>
      {/* /todo-header */}

      <div class="todo-body">
         <div class="tasks">
            <div class="task">
               <Input type="checkbox" id="task-1" label="Record todo list video"/>
            </div>
            {/* /task-1 */}

            <div class="task">
               <Input type="checkbox" id="task-2" label="Another task"/>
            </div>
            {/* /task-2 */}

            <div class="task">
               <Input type="checkbox" id="task-3" label="Third task" />
            </div>
            {/* /task-3 */}
         </div>
         {/* /tasks */}

         <div class="new-task-creator">
            <form action="">
               <Input 
               type="text" 
               className="new-input list"
               placeholder="New Task Name"
               />
               <Button className="task" aria-label="create new task">+</Button>
            </form>
         </div>

         <div class="delete-task">
            <Button className="delete">Clear completed tasks</Button>
            <Button className="delete">Delete List</Button>
         </div>
      </div>
      {/* /todo-body */}
   </div>
)

export default ToDoList;