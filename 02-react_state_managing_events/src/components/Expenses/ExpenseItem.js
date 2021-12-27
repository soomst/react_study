import React from 'react';
import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    const expense = props.expense;
    const clickHandler = () => {
        console.log(expense.title)
    }
    
    //console.log(props)
    return (
        <Card className = "expense-item">
            <ExpenseDate date={expense.date}/>
            <div className="expense-item__description">
                <h2>{expense.title}</h2>
                <div className="expense-item__price">${expense.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;