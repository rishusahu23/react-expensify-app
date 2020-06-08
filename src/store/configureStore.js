import { applyMiddleware,createStore, combineReducers,compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk  from 'redux-thunk'

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
   
  );

  return store;
};
 //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()