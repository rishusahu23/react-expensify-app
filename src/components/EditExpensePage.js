import React from 'react';

import ExpenseForm  from './ExpenseForm'
import { connect } from 'react-redux';
import {startRemoveExpense} from '../actions/expenses'
import {startEditExpense} from '../actions/expenses'

const EditExpensePage = (props) => {
  console.log(props.expense);
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      
      <div className="content-container">
        <ExpenseForm 
          expense={props.expense}
          onSubmit={(expense)=>{
            props.dispatch(startEditExpense(props.expense.id,expense))
            props.history.push('/')
          }}
        />
        <button 
            className="button button--secondary"
            onClick={()=>{
                props.dispatch(startRemoveExpense({id:props.expense.id}))
                props.history.push('/')
        }}
        >
            Remove Expense
        </button>
      </div>
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
