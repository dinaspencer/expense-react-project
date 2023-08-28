import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [yearFilter, setYearFilter] = useState('2023');

    const selectDateFilter = (filterYear) => {
        setYearFilter(filterYear);
        console.log('in expenses.js');
        console.log(filterYear);
    }

    return (
        <div>
        <Card className="expenses">
        <ExpenseFilter selected={yearFilter} onDateSelect={selectDateFilter} />

        {props.expenses.map(({id, title, amount, date}) =>
        {
            return <ExpenseItem key={id} title={title} amount={amount} date={date} />
        }
        )}
        
        {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
      <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}/>
      <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>
      <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}/> */}
      </Card>
      </div>
    )
}


export default Expenses;