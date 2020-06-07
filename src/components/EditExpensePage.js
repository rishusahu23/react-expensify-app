import React from 'react';

import ExpenseForm  from './ExpenseForm'
import { connect } from 'react-redux';
import {removeExpense} from '../actions/expenses'
import {editExpense} from '../actions/expenses'

const EditExpensePage = (props) => {
  console.log(props.expense);
  return (
    <div>
      
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense)=>{
          props.dispatch(editExpense(props.expense.id,expense))
          props.history.push('/')
        }}
      />
      <button  
          onClick={()=>{
              props.dispatch(removeExpense({id:props.expense.id}))
              props.history.push('/')
      }}
      >
          remove
      </button>
    </div>
  );
};

const mapToStateProps=(state,props)=>{
  return{
    expense:state.expenses.find((data)=>{
      return data.id===props.match.params.id
    })
  }
}
export default connect(mapToStateProps)(EditExpensePage);
