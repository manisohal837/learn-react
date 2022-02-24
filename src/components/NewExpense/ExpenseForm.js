import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // Using a single state instead of multiple state. 
  // Note that an object is used for storing mulitple values. 
  // The set function is called to set value on change, 
  // also the existing state is spread to keep other value intact.

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  // const [enteredTitle, setEnteredTitle] = useState('');

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value
    });
  };

  // const [enteredAmount, setEnteredAmount] = useState('');

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    });
  };

  // const [enteredDate, setEnteredDate] = useState('');

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    });
  };

  console.log(userInput);

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
