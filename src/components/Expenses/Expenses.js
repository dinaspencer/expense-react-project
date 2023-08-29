import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [yearFilter, setYearFilter] = useState('2023');

    const selectDateFilter = (chosenYear) => {
        setYearFilter(chosenYear);
        console.log('in expenses.js');
        console.log(chosenYear);
    }

    const filteredExpenses = props.expenses.filter(expense=> {
        return expense.date.getFullYear().toString() === yearFilter;
    });

    return (
        <div>
        <Card className="expenses">
        <ExpenseFilter selected={yearFilter} onDateSelect={selectDateFilter} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList expenses={filteredExpenses} />
       

        {/* OTHER POSSIBLE WAY {props.expenses.map(({id, title, amount, date}) =>
        {
            return <ExpenseItem key={id} title={title} amount={amount} date={date} />
        }
        )} */}
        
      </Card>
      </div>
    )
}


export default Expenses;