import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData  = {
            ...enteredExpenseData, 
            id : Math.random().toString()
        }

        props.onAddExpense(ExpenseData)
    }

    const editingHandler = () =>{
        setIsEditing(!isEditing)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={editingHandler} >Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onEditingHandler={editingHandler}/>}
        </div>
        
    )

}

export default NewExpense