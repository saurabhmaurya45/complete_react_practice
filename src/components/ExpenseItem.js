import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    // const expenseDate = new Date(2021,2,24);
    // const expenseTitle = "Car Insurance";
    // const expensePrice = 256.34;
    // const month = props.date.toLocaleString("en-US", { month: "long" });
    // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    // const year = props.date.getFullYear();
    return (
        // <div className='expense-item'>
        //     <div>
        //         {expenseDate.toISOString()}
        //     </div>
        //     <div className='expense-item__description'>
        //         <h2>{expenseTitle}</h2>
        //         <div className='expense-item__price'>${expensePrice}</div>
        //     </div>
        // </div>
        <div className='expense-item'>
            {/* <div>
               { props.date.toISOString()}
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div> */}
            <ExpenseDate  date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
    
}

export default ExpenseItem;