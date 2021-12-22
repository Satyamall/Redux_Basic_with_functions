
import {ADD_TODO,TOGGLE_TODO} from './actionTypes.js';

export default (state,{type,payload})=>{

    switch(type){
        case ADD_TODO:
            return{
                ...state,
                todo: [...state.todo,payload]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todo: state.todo.map( item=> item.title===payload? {...item, status: !item.status}: item)
            }
        default:
            return state
    }
}