import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [formEditing, setFormEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: 'e'+(Math.floor(Math.random()*100)).toString()
        };
        props.onAddExpense(expenseData);
        setFormEditing(false);

    };

    const updatingFormHandler = () => {
        setFormEditing(true);
    };

    const notUpdatingFormHandler = () => {
        setFormEditing(false);
    }

    return (
        <div className="new-expense">
            {!formEditing ? <button onClick={updatingFormHandler}>Add New Expense</button> :  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={notUpdatingFormHandler} /> }
        </div>
    )
}

export default NewExpense;