import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters' 
import getVisibleExpenses from './selectors/expenses'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill',amount: 4500, createdAt:200}))
store.dispatch(addExpense({description: 'Gas Bill'}))
store.dispatch(addExpense({description: 'Rent Bill', amount: 95000, createdAt: 0}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


console.log(visibleExpenses);
const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
