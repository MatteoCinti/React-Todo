import React, { useState }from 'react';
import { connect } from 'react-redux';

// Import files and CSS
import './all-tasks.styles.scss';
import { setActiveList } from "../../redux/todos/todos.thunk"
import { setNewList } from "../../redux/todos/todos.actions"
import { getLists } from '../../redux/todos/todos.selectors'

// Import components
import Button from "../button/button.component"
import Input from "../input/input.component"

const AllTasks = (props) => {
   let [newListName, setNewListName] = useState('') 

   const handleChange = (e) => {
      setNewListName(e.target.value )
   }

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
            {console.log(newListName)}
            <Input type="text" className="new-input list" placeholder="New List Name" value={newListName} handleChange={handleChange}/>
            <Button 
               className="list create" 
               aria-label="create new list" 
               newListName={newListName} 
               handleClick={(e, newListName) => {
                  props.setNewList({e, newListName});
                  setNewListName('');
               }}>+</Button>
         </form>
      </div>
)}

const mapStateToProps = state => ({
   todos: getLists(state)
})


const mapDispatchToProps = dispatch => ({
      setActiveList: payload => dispatch(setActiveList(payload)),
      setNewList: payload => dispatch(setNewList(payload))  
} )

export default connect(mapStateToProps, mapDispatchToProps)(AllTasks);