// Import files and CSS
import './all-tasks.styles.scss';

// Import components
import Button from "../button/button.component"
import Input from "../input/input.component"

const AllTasks = () => (
   <div className="all-tasks">
      <h2 className="task-list-title">My Lists</h2>
      
      <ul className="task-list">
         <li id="active-list" className="list-name">Youtube</li>
         <li className="list-name">Work</li>
         <li className="list-name">Groceries</li>
      </ul>
   

      <form action="">
         <Input type="text" className="new-input list" placeholder="New List Name" />
         <Button className="list create" aria-label="create new list">+</Button>
      </form>
   </div>
)

export default AllTasks;