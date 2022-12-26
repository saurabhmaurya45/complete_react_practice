import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Cards';

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);
    
    
    const clickHandler = ()=>{
        setTitle("updated");
    }
    return (
        <Cards className='expense-item'>
            <ExpenseDate  date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick = {clickHandler}> Click</button>
        </Cards>
    );
    
}

export default ExpenseItem;