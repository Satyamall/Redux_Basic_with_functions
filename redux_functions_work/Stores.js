

import { addTodo,toggleTodo } from "./action.js";
import reducer from "./reducer.js";

class Store{
     constructor(reducer,initState){
         this.reducer=reducer;
         this.state=initState
     }

     //retrieve the state
     getState(){
         return this.state
     }

     //dispatch and action
     dispatch(action){
         this.state=this.reducer(this.state,action)
     }
}

//initial state
const initState={
    todo:[]
}

var store=new Store(reducer,initState)
console.log(store.getState())

store.dispatch(addTodo("BUY_MILK"))
store.dispatch(addTodo("BUY BREAD"))
store.dispatch(toggleTodo("BUY BREAD"))
console.log(store.getState())
