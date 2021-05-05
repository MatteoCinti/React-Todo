const INITIAL_STATE =[{
      isActive: false,
      listName: "Youtube"
   },{
      isActive: false,
      listName: "Groceries"
   }]


const todosReducer = ( state = INITIAL_STATE, action ) => {
   const {type, payload} = action;

   switch( type ){
      case 'SET_NEW_LIST':
         return [
            ...state,
            {
               isActive: true,
               listName: payload
            }
         ];
      case 'SET_ACTIVE_LIST':
         const newArray = [...state]
         newArray.forEach(list=> list.isActive = false )
         newArray[payload].isActive = true;

         return newArray
      default:
         return state;
   }
}

export default todosReducer;