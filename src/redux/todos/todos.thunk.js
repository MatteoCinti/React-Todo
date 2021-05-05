import { setNewActiveList } from "./todos.actions"

export function setActiveList(payload) {
   return function _resetForm(dispatch, getState) { 
     dispatch(setNewActiveList(payload));
   }
}