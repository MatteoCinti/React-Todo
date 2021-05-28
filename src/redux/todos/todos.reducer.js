const INITIAL_STATE =[{
      isActive: true,
      listName: "Youtube",
      data:[
         {
            completed: false,
            label: 'Record todo list video'
         },
         {
            completed: false,
            label: 'Another task'
         },
         {
            completed: false,
            label: 'Third task'
         }
      ]
   },{
      isActive: false,
      listName: "Groceries",
      data:[]
   }]


const todosReducer = ( state = INITIAL_STATE, action ) => {
   const {type, payload} = action;

   switch( type ){
      case 'SET_NEW_LIST':
         //Prevent Button Default behaviour
         payload.e.preventDefault()
         //Create a new array from state
         const newListArray = [...state]
         //Create a new const from FormField value
         const newListName = payload.newListName
         //Unsetting Active List
         newListArray.forEach(list=> list.isActive = false)
         
         return [
            //Return all state without active list
            ...newListArray,
            //Return new list as Active
            {
               isActive: true,
               listName: newListName,
               data: []
            }
         ];
      case 'SET_ACTIVE_LIST':
         //Create a new array from state
         const activeListArray = [...state]
         //Unsetting Active List
         activeListArray.forEach(list=> list.isActive = false)
         //Setting selected list to Active
         activeListArray[payload].isActive = true;
         //Return new state
         return activeListArray

      case 'SET_NEW_TODO':
         //Prevent Button Default behaviour
         payload.e.preventDefault()
         //Create a new array from state
         const newToDoListsArray = [...state]
         //Create a new const from FormField value
         const newToDoName = payload.newToDoName
         // Add New Todo
         newToDoListsArray
            .filter(list => list.isActive)
            .map(list => list.data.push({
               completed: false,
               label: newToDoName
            }))
         return newToDoListsArray  

      case 'SET_COMPLETED_TODO':
         //Create a new array from state
         const completedToDoListsArray = [...state]
         completedToDoListsArray
         .filter(list => list.isActive)
         .map(list => list.data[payload].completed = !list.data[payload].completed)
         return state
         
      default:
         return state;
   }
}

export default todosReducer;