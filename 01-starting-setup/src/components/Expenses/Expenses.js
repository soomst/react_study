import React from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = props.expenses;

    return (
        <Card className='expenses'>
            {
                expenses.map((arr)=>{
                    return <ExpenseItem expense={arr}/>
                })
            }
        </Card>
    )
}

export default Expenses;