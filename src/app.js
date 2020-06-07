import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux'

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' ,amount:40,createdAt:100,note:'first bill added'}));
store.dispatch(addExpense({ description: 'gas bill' ,amount:400,createdAt:1000,note:'second bill added'}));
store.dispatch(addExpense({ description: 'phone bill' ,amount:4,createdAt:10000,note:'third bill added'}));
store.dispatch(setTextFilter('water'));
setTimeout(()=>{
    store.dispatch(setTextFilter(''));
},3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<Provider store={store}>
        <AppRouter />
    </Provider>, 
    document.getElementById('app')
);
