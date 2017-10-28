import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/index.css';
import App from './App';
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters' 
import getVisibleExpenses from './selectors/expenses'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill'}))
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
