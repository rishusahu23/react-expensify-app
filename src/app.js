import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux'

import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase'

const store = configureStore();



//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

ReactDOM.render(<p>Loading...</p>, 
    document.getElementById('app')
);

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(<Provider store={store}>
        <AppRouter />
    </Provider>, 
    document.getElementById('app')
    );  
})

