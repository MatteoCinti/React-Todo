// Import files and CSS
import './all-tasks.styles.scss';

// Import components
import Button from "../button/button.component"
import Input from "../input/input.component"

const AllTasks = () => (
   <div className="all-tasks">
      <h2 className="task-list-title">My Lists</h2>
      
      <ul className="task-list">
         <li className="active-list">Youtube</li>
         <li>Work</li>
         <li>Groceries</li>
      </ul>
   

      <form action="">
         <Input type="text" className="new-input list" placeholder="New List Name" />
         <Button className="list" aria-label="create new list">+</Button>
      </form>
   </div>
)

export default AllTasks;