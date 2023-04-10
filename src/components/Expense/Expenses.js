import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Cards from "../layout/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses({ items }) {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          getFilterData={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Cards>
    </div>
  );
}
export default Expenses;
