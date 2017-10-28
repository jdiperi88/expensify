import {createStore} from 'redux';

//ACTION GENERATORS
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementBy = ({decrementBy = 1} = {}) =>{
    type: 'DECREMENT',
    decrementBy
}
const resetCount = ()=>{
    type: 'RESET'
}

const setCount = ({count})=>{
    type: 'SET',
    count
}

///REDUCERS!
const countReducer = (state ={count:0}, action ) => {
    
        switch(action.type){
            case 'INCREMENT':
                return {
                    count: state.count + incrementBy,
                    
                }
            case 'DECREMENT':
                return {
                    count: state.count - decrementBy
                }
            case 'SET':
                return {
                    const: action.count
                }
            case 'RESET':
                return {
                    count: state.count = 0
                }
            default:
                return state;
        }
    }

//this function creates the redux store and takes one argument which is state
//the second argument is the action
const store = createStore();

//monitors changes in the store
// store.subscribe(()=>{
//     console.log(store.getState());
// })

//to unsubscribe to the stores changes you would just assign it to an 
//unsubscribe variable and invoke the function
// unsubscribe();
const unsubscribe = store.subscribe(()=>{
                        console.log(store.getState());
                    })





//Actions: an object that gets to the store
//DISPATCH: every action needs to be dispatched using the dispatch method on the store
//Increment the count
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(setCount({count: 101}));

store.dispatch({decrementBy: 10})

store.dispatch({
    type: 'SET',
    count: 101
})