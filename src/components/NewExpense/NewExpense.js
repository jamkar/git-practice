import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log('In NewExpense.js');
    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;