import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            description:props.expense?props.expense.description : '',
            amount:props.expense?(props.expense.amount/100).toString() : '',
            note:props.expense?props.expense.note : '',
            createdAt:props.expense? moment(props.expense.createdAt): moment(),
            calenderFocused:false,
            error:''
        }
    }

    onDescriptionChange=(e)=>{
        const description=e.target.value
        this.setState(()=>({description}))
    }

    onAmountChange=(e)=>{
        const amount=e.target.value
        if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState(()=>({amount}))
    }

    onNoteChange=(e)=>{
        const note=e.target.value
        this.setState(()=>({note}))
    }

    onDateChange=(createdAt)=>{
       // console.log(createdAt)
        if(createdAt)
        this.setState(()=>({createdAt}))
    }

    onFocusChange=({focused})=>{
        this.setState(()=>({calenderFocused:focused}))
    }

    onSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.description||!this.state.amount){
            this.setState(()=>({error:'please provide descripton and amount..'}))
        }
        else{
            this.setState(()=>({error:''}))
            const expense={
                description:this.state.description,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note,
                amount:parseFloat(this.state.amount,10)*100

            }
            this.props.onSubmit(expense)
        }
    }

    render(){
        return(
            <div>
                
                <form className='form' onSubmit={this.onSubmit}>
                    {this.state.error&&<p className="form__error">{this.state.error}</p>}
                    <input 
                        type="text"
                        className="text-input"
                        placeholder="description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input
                        type="text"
                        className="text-input"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        isOutsideRange={()=>false}
                        numberOfMonths={1}
                    />
                    <textarea
                        placeholder="enter your note here"
                        className="textarea"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                     </textarea>
                     <div>
                        <button className="button">Save Expense</button>
                     </div>
                </form>
            </div>
        )
    }
}

export default ExpenseForm
