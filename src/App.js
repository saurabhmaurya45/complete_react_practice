import React from "react";
import DisplayExpenses from './components/Expenses/DisplayExpenses';
import './components/Expenses/Expenses.css';
import Cards from './components/UI/Cards';

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
      <h2>Let's get started!</h2>
      <Cards className='expenses'>
          <DisplayExpenses expenses = {expenses}/>
      </Cards>
        
    </>
  );
}

export default App;
