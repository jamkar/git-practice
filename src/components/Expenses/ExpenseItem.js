import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {

  const [ title, setTitle] = useState(props.title);
  console.log("ExpenseItem component evaluated");
  console.log("title: ", title);
  
  const clickHandler = () => {
    setTitle('Updated');
    console.log("Button clicked", title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Button</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
