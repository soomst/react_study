import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); //map안에서 조건문이 아닌, filter를 통해서 조건을 걸어주면 되지~!!ㅠㅠ 그렇네...ㅠㅠ

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {
        /* {filteredExpenses.length === 0 ? <p>no expenses found.</p> : filteredExpenses.map( (arr) => (
                <ExpenseItem key={arr.id} expense={arr} />
                )
            )}*/
        //삼항수식을 독립수식으로 나눠보기. (&& 사용  )
        // filteredExpenses.length === 0 && <p>No expenses found.</p>}
        // {filteredExpenses.length > 0 && filteredExpenses.map( (arr) => (
        //     <ExpenseItem key={arr.id} expense={arr} />
        //     )
        // )
        //expensesContent
      }
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
