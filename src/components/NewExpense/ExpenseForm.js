import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {

    const [ expenseTitle, setExpenseTitle ] = useState('');
    const [ expenseAmount, setExpenseAmount ] = useState('');
    const [ expenseDate, setExpenseDate ] = useState('');

    const titleChangeHandler = (event) => {
        setExpenseTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setExpenseAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setExpenseDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: expenseTitle,
            amount: +expenseAmount,
            date: new Date(expenseDate)
        }
        props.onSaveExpenseData(expenseData);
        setExpenseTitle('');
        setExpenseAmount('');
        setExpenseDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <button className="new-expense">Add New Expense</button>
            
            
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={expenseTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' value={expenseAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min='2020-01-01' max='2023-12-31' value={expenseDate} onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                </div>
               
            
            </div>
        </form>
    )

}

export default ExpenseForm;