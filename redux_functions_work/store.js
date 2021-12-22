
const reducer = (state, action) => {
    // decide
    switch(action.type){
        case "INCREMENT_COUNTER":{
            return {
                ...state,
                count: state.count + action.payload
            }
        }
        default:{ 
             return state;
        }
    }
}


// action creator
const incrementCounter = (amount) => ({type: "INCREMENT_COUNTER", payload: amount});

class Store {
    #state
    #reducer
    #listener
    constructor(reducer, initialState){
        this.#state = initialState;
        this.#reducer = reducer;
        this.#listener = [];
    }

    getState(){
        return this.#state;
    }

    dispatch(action){
        // reducer will come in
        //reducer will decide how the state gets updated
        this.#state = this.#reducer(this.#state,action);
        this.notify();
    }

    // #listener
    subscribe(callback){
        this.#listener.push(callback);
        const index = this.#listener.indexOf(callback);
        // Closuer
        return ()=>{
            this.#listener = this.#listener.filter(a=>a!==callback);
        }
    }
    notify(){
        for(let listener of this.#listener){
            listener(this.#state);
        }
    }
}

const store = new Store(reducer,{count: 1});
const unsubscribe_one = store.subscribe(()=>{
    console.log("something has changed 1");
})
const unsubscribe_two = store.subscribe(()=>{
    console.log("something has changed 2");
})
const unsubscribe_three = store.subscribe(()=>{
    console.log("something has changed 3");
})


console.log(store.getState());

// const action = {type: "INCREMENT_COUNTER", payload: 1}
const action = incrementCounter(1);

store.dispatch(action);

unsubscribe_three();

store.dispatch(action);
store.dispatch(action);

// let initState = {count : 1};
// let a = reducer(initState, action)

// console.log(a);

//  a = reducer(a,action);