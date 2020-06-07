import React from 'react'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../actions/filters'
import 'react-dates/lib/css/_datepicker.css'

class ExpenseListFilters extends React.Component{
    state={
        calenderFocused:null
    }

    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange=(calenderFocused)=>{
        this.setState(()=>({calenderFocused:calenderFocused}))
    }

    render(){
        return(
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={(e)=>{
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                />
    
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={(e)=>{
                        if(e.target.value==='date')
                        this.props.dispatch(sortByDate())
                        else
                        this.props.dispatch(sortByAmount())
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />
            </div>
        )
    }
}



const mapToStateProps=(state)=>{
    return{
        filters:state.filters
    }
}

export default connect(mapToStateProps)(ExpenseListFilters)