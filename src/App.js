import React from "react";
import DisplayExpenses from './components/Expenses/DisplayExpenses';
import './components/Expenses/Expenses.css';
import Cards from './components/UI/Cards';
import NewExpenses from './components/NewExpenses/NewExpenses';

const  App = ()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //to pass the data from child to parent create a function at parent component and call it to child component
  // and set there value. it will automatically get reflected.

  const saveChangedExpenseData =(enteredData)=>{
    const updatedData = {
      ...enteredData,
    };
    console.log(updatedData);
  };

  // react under the hood looks like this it transforms below written code into this format
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},'Let\'s get Started'),
  //   React.createElement(Cards, {},
  //     React.createElement(DisplayExpenses, {expenses :  expenses}))
  // );

  return (
    <>
      <NewExpenses onchangedExpense = {saveChangedExpenseData} />
      <Cards className='expenses'>
          <DisplayExpenses expenses = {expenses}/>
      </Cards>
        
    </>
  );
}

export default App;
