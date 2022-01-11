import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const expenses = props.expenses;
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {
                expenses.map( arr => filteredYear.match(arr.date.getFullYear()) ? <ExpenseItem key={arr.id} expense={arr} /> : null )
            }
        </Card>
    )
}

export default Expenses;