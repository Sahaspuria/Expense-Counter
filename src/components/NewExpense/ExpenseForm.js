import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ getExpenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amoutChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date)
    };
    getExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setAmount("");
  };
  const addHandler = () => {
    setIsFormVisible(true);
  };
  const cancelHandler = () => {
    setIsFormVisible(false);
  };
  if (!isFormVisible) {
    return (
      <button type="submit" onClick={addHandler}>
        Add New Expense
      </button>
    );
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            inputMode="numeric"
            value={amount}
            onChange={amoutChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
