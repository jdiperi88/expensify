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

//SET_TEXT_FILTER
const setTextFilter = (text ='')=>({
    type: 'SET_TEXT_FILTER',
    text
})

//SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',  
})

//SET_START_DATE
const setStartDate = (payload) => ({
    type: 'SET_START_DATE',
    payload
})

const setEndDate = (payload) => ({
    type: 'SET_END_DATE',
    payload
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
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                text: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                text:'amount'
            }
        case 'SET_START_DATE':
            return { 
                ...state,
                startDate: action.payload
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.payload
            }
        default:
            return state;
    }
}

//get visible expensess
const getVisibileExpenses =(expenses, {text, sortBy,startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'number'){
            return a.amount < b.amount ? 1 : -1;
        }
    })

}

//create store
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibileExpenses(state.expenses, state.filters)
})

const expenseOne = store.dispatch(addExpense({description:'rent',amount:100, createdAt :1000}))
const expenseTwo = store.dispatch(addExpense({description:'rent',amount:100, createdAt: -1000}))

store.dispatch(removeExpense({id:expenseOne.expense.id}))
store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500}))
store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(125));

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