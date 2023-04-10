import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addExpenseData }) => {
  const setExpenseData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    };

    addExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm getExpenseData={setExpenseData} />
    </div>
  );
};

export default NewExpense;
