import React from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props)=>{
    const saveExpenseDataHandler = (changedExpenseData)=>{
        const expenseData = {
            ...changedExpenseData,
            id: Math.random().toString()
        };
        props.onchangedExpense(expenseData);
    };
    return (
        <div className = "new-expense">
            <ExpenseForm onsaveExpenseForm = {saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpenses;