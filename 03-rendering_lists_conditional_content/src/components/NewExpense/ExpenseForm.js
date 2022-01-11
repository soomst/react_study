import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enterdDate, setEnteredDate] = useState('');
    // 하나로 합치기~, 개별도 좋음. 개별 값만 전달하고 싶을 때도 있고 등등
    //const [userInput, setUserInput] = useState({enteredTitle : '', enteredAmount: 0, enteredDate:''})

    const titleChngHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // })
        // setUserInput((prevState)=>{
        //     //prevState : 이전 상태의 snapshot을 가져올 수 있음.
        //     //return은 새로운 상태의 snapshot을 해줘야 겠지..?!
        //     //이전 방법처럼이 아닌 이렇게 왜 해야하는가?? react가 상태 업데이트를 계획하는 경우를 생각해야 한다.
        //     // ==> 즉시 일어나는 업데이트를 해주는 것이 아닌 계획성이므로 
        //     // *** 동시에 많은 상태 업데이트를 하게 된다면, 오래되거나 잘못된 상태 snapshot에 의존할 가능성이 열린다. ***
        //     // *** 이렇게 하면 inner function에서 제공하는 상태 snapshot이 항상 최신 상태 snapshot이라는걸 React가 보장한다. ***
        //     return { ...prevState, enteredTitle : event.target.value}
        // })
    }

    const amountChngHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredAmount : event.target.value}
        // })
    }

    const dateChngHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredDate : event.target.value}
        // })
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
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm