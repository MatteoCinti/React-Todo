import React from 'react';
import { connect } from 'react-redux';

// Import files and CSS
import './all-tasks.styles.scss';
import { setActiveList } from "../../redux/todos/todos.actions"

// Import components
import Button from "../button/button.component"
import Input from "../input/input.component"

const AllTasks = (props) => {

   return(
      <div className="all-tasks">
        
         <h2 className="task-list-title">My Lists</h2>
         
         <ul className="task-list">
         
            {props.todos.map((list, index) =>{
               const id = list.isActive ? 'active-list' : null ;
               return <li id={id} className="list-name" key={index} onClick={() => props.setActiveList(index)}>{list.listName}</li>
            })}

         </ul>

         <form action="">
            <Input type="text" className="new-input list" placeholder="New List Name" />
            <Button className="list create" aria-label="create new list">+</Button>
         </form>
      </div>
)}

const mapStateToProps = state => ({
   todos: state.todos
})


const mapDispatchToProps = dispatch => { 
   return {
      setActiveList: payload => dispatch(setActiveList(payload)) 
   }
} 

export default connect(mapStateToProps, mapDispatchToProps)(AllTasks);