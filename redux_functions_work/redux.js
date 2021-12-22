
//actions

const ADD_TODO='ADD_TODO';
const TOGGLE_TODO='TOGGLE_TODO';

// action creaters

const addTodo=(payload)=>({
    type: ADD_TODO,
    payload: {
        title: payload,
        status: false
    }
})

const toggleTodo= (payload)=>({
    type: TOGGLE_TODO,
    payload
})

//reducer
// const reducer=(state,action)=>({
//     ...state, ...action.payload
// })

//another type or logic with reducer
const reducer=(state,{type,payload})=>{

    switch(type){
        case "ADD_TODO":
            return{
                ...state,
                todo: [...state.todo,payload]
            }
        case "TOGGLE_TODO":
            return{
                ...state,
                todo: state.todo.map( item=> item.title===payload? {...item, status: !item.status}: item)
            }
        default:
            return state
    }
}

//action is an object
// action has some type and payload


//initial state
const initState={
    // counter: 0
    todo:[]
}

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

// var store=new Store(reducer,{counter:0})
// var store=new Store(reducer,initState)
// console.log(store.getState())
// console.log(reducer("value"))
// console.log(reducer(initState,{type: 'UPDATE',payload: {counter: 10}}))
// store.dispatch({type: 'UPDATE',payload: {counter: 10}})
// console.log(store.getState())
// store.dispatch({type: 'UPDATE',payload: {value: 10}})
// console.log(store.getState())

var store=new Store(reducer,initState)
console.log(store.getState())

// store.dispatch({type: 'ADD_TODO',payload:{
//     title: "BUY MILK",
//     status: false
// }})
store.dispatch(addTodo("BUY_MILK"))
console.log(store.getState())

// store.dispatch({type: ADD_TODO,payload:{
//     title: "BUY BREAD",
//     status: false
// }})
store.dispatch(addTodo("BUY BREAD"))
console.log(store.getState())

// store.dispatch({type: TOGGLE_TODO,payload:"BUY BREAD"})
store.dispatch(toggleTodo("BUY BREAD"))
console.log(store.getState())

// actions
// dispatch
// dispatchers can update the store
// access the store state by using getState