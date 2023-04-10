import ExpenseDate from "./ExpenseData";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <div className="expense-item__date">{props.date.toDateString()}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3 className="expense-item__price">${props.amount}</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
