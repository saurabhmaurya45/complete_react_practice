import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2021,2,24);
    const expenseTitle = "Car Insurance";
    const expensePrice = 256.34;

    return (
        <div className='expense-item'>
            <div>
                {expenseDate.toISOString()}
            </div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expensePrice}</div>
            </div>
        </div>
    );
    
}

export default ExpenseItem;