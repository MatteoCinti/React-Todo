const INITIAL_STATE =[{
      isActive: true,
      listName: "Youtube"
   },{
      isActive: false,
      listName: "Groceries"
   }]


const todosReducer = ( state = INITIAL_STATE, action ) => {
   const {type, payload} = action;

   switch( type ){
      case 'SET_NEW_LIST':
         //Create a new array from state
         const newListArray = [...state]
         //Create a new const from FormField value
         const newListName = payload.newListName
         //Unsetting Active List
         newListArray.forEach(list=> list.isActive = false )
         //Prevent Button Default behaviour
         payload.e.preventDefault()
         return [
            //Return all state without active list
            ...newListArray,
            //Return new list as Active
            {
               isActive: true,
               listName: newListName
            }
         ];
      case 'SET_ACTIVE_LIST':
         //Create a new array from state
         const activeListArray = [...state]
         //Unsetting Active List
         activeListArray.forEach(list=> list.isActive = false )
         //Setting selected list to Active
         activeListArray[payload].isActive = true;
         //Return new state
         return activeListArray
      default:
         return state;
   }
}

export default todosReducer;