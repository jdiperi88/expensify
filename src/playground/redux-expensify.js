import {createStore, combineReducers } from 'redux';
import uuid from 'uuid'
//actions 

//ADD_EXPENSE
const addExpense = (
    {
        desription ='',
        note='',
        amount=0,
        createdAt=0
    } ={})
    =>({
    type: 'ADD_EXPENSE',
        expense:{
            id: uuid(),
            desription,
            note,
            amount,
            createdAt
         }
})

//REMOVE_EXPENSE

const removeExpense = ({id} = {}) =>{
    type: 'REMOVE_EXPENSE',
    id
}

// EDIT_EXPENSE

const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id
})

//EXPENSE REDUCER 
//default variable 
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState,action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ]
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id === action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }
            })
        default:
            return state;
    }
}
//FILTER REDUCER 
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer=(state = filterReducerDefaultState,action) => {
    switch(action.type){
        
        default:
            return state;
    }
}

//create store
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

const expenseOne = store.dispatch(addExpense({description:'rent',amount:100}))
const expenseTwo = store.dispatch(addExpense({description:'rent',amount:100}))

store.dispatch(removeExpense({id:expenseOne.expense.id}))
store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500}))
store.dispatch(setTextFilter('rent'));

const demoState = {
    expends: [{
        id: 'sadmlskd',
        description: 'January rent',
        note: 'This is a final payment',
        amount: 54500,
        createdAt: 0
    }],
    filter: {  
        text: 'rent',
        sortBy: 'amount',// date or input,
        startDate: undefined,
        endDate: undefined
    }
}