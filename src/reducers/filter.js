import {CHANGE_FILTER} from '../actions/index'
const defaultState = {
    filter: 'All'
}

const filterReducer = (state = defaultState, action) => {
 if(action.type === CHANGE_FILTER){
   return {
       ...state,
       filter: action.filter
   }   
 }
 return state; 
}

