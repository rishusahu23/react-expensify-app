import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'



const ExpenseListItem =({id,amount,description,createdAt,note})=>{
   // const {id,amount,description,createdAt,note}=props.expense
        return(
        <div>
            <NavLink to={`/edit/${id}`} exact={true} activeClassName="is-active">
                {description}
            </NavLink>
            
            <h4>{amount} - {createdAt} - {note}</h4>
           
        </div>
    )
}

export default ExpenseListItem