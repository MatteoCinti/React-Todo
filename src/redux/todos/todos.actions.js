export const setNewList = payload => ({
   type: 'SET_NEW_LIST',
   payload: payload
 });

export const setNewActiveList = payload => ({
   type: 'SET_ACTIVE_LIST',
   payload: payload
 });

 export const setNewToDo = payload => ({
  type: 'SET_NEW_TODO',
  payload: payload
});

export const setCompletedToDo = payload => ({
  type: 'SET_COMPLETED_TODO',
  payload: payload
});