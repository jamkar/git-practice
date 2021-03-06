import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const titleChangeHandler = (e) => {
    // setTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value
    // })
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value
      }
    });
  };

  const amountChangeHandler = (e) => {
    // setAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value
    // })
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: e.target.value
      }
    })
  }

  const dateChangeHandler = (e) => {
    // setDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value
    // })
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      ...userInput,
      date: new Date(userInput.date)
    }

    console.log(expenseData);

    setUserInput({
      title: '',
      amount: '',
      date: ''
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.title} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-01-01" value={userInput.date} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;