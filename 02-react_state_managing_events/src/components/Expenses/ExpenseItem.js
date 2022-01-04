import React, { useState } from 'react';
import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    const expense = props.expense;
    
    const [title, setTitle] = useState(expense.title);

    const clickHandler = () => {
        setTitle('Updated!')
        console.log(title) //Updated!를 출력하지 않음, 이전 값을 출력
        //***값을 바로 바꿔주는게 아닌, 상태가 업데이트 되도록 계획하기 때문이다.***
    }
    
    return (
        <Card className = "expense-item">
            <ExpenseDate date={expense.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${expense.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;