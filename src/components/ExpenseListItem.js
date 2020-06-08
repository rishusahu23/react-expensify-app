import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'


const ExpenseListItem =({id,amount,description,createdAt,note})=>{
   // const {id,amount,description,createdAt,note}=props.expense
  // numeral.locale('Rs')
   
        return(
        <div>
            <NavLink to={`/edit/${id}`} exact={true} activeClassName="is-active">
                {description}
            </NavLink>
            
            <h4>
                {
                   
                    numeral(amount/100).format('Rs0,0.00')}
                -  
                {moment(createdAt).format('MMMM Do, YYYY')} 
                - 
                {note}</h4>
           
        </div>
    )
}

export default ExpenseListItem