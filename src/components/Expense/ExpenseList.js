import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h3 className="expenses-list__fallback ">Expenses Not Found </h3>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
