import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const [changedTitle, setChangedTitle] = useState('');
    const [changedAmount, setChangedAmount] = useState('');
    const [changedDate, setChangedDate] = useState('');
    
    //alternative approach : managing one state instead of 3 seperate state
    // const [userInput, setUserInput] = useState({
    //     changedTitle : '',
    //     changedAmount : '',
    //     changedDate : ''
    // });


    const titleChangehandle = (event)=>{
        setChangedTitle(event.target.value);
        
        // alternative approach: we using spread operator to retain the previous value because react just replaces the object.
        
        // setUserInput({
        //     ...userInput,
        //     changedTitle : event.target.value
        // });

        // the above method is not a good approach because react does not immediately changes the state instead it schedules the changes. 
        // If we are performing any operation on any previous value then there might be the chance that it uses older value when there will be lot of states.
        // So alternative to this is by using a function approach
       
        // setUserInput(
        //     (prevValues)=>{
        //         return {...prevValues, changedTitle : event.target.value}
        //     }
        // );

    };

    const amountChangehandle = (event)=>{
        setChangedAmount(event.target.value);
    };

    const dateChangehandle = (event)=>{
        setChangedDate(event.target.value);
    };

    //handling submiting form
    const submitHandle = (event)=>{
        // to prevent reloading browser by default the page will reload if we click on button.
        event.preventDefault();

        const ExpenseData = {
            title : changedTitle,
            amount : changedAmount,
            date :  new Date(changedDate)
        };
        props.onsaveExpenseForm(ExpenseData);
        //after submiting set values to empty to make input box empty again this is called two way binding
        setChangedTitle('');
        setChangedDate('');
        setChangedAmount('');
    };

    return <form onSubmit = {submitHandle}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type = "text" value ={changedTitle} onChange = {titleChangehandle}/> 
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type = "number" value ={changedAmount} min = "0.01" step = "0.01" onChange = {amountChangehandle}/> 
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type = "date" value ={changedDate} min="2019-01-01" max="2022-12-31" onChange = {dateChangehandle}/> 
            </div>
            <div className="new-expense__actions">
                <button type = "submit">Add Expense </button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;