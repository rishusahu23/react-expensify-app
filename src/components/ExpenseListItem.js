import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'


const ExpenseListItem =({id,amount,description,createdAt,note})=>{
   
   
        return(
            <Link className="list-item" to={`/edit/${id}`} >
                <div>
                    <h3 className="list-item__title">{description}</h3>
                    <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')} </span>
                </div>
                <h3 className="list-item__data">{numeral(amount/100).format('Rs0,0.00')}Rs</h3>
            </Link>
            
    )
}

export default ExpenseListItem