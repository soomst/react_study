import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enterdDate, setEnteredDate] = useState('');

    const titleChngHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChngHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChngHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault() //default js, 해당 이벤트의 기본 요청값을 막을 수 있음.
        
        const expenseData = {
            title : enteredtitle, 
            amount : enteredAmount, 
            date : new Date(enterdDate)
        }

        props.onSaveExpenseData(expenseData) //부모 함수 호출

        //값 초기화
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        props.onEditingHandler()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredtitle} onChange={titleChngHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChngHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enterdDate} onChange={dateChngHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onEditingHandler}>cancle</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm