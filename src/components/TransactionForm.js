// TransactionForm.js
import { useState } from 'react';

function TransactionForm({ addTransaction }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddTransaction = () => {
//This will handle a transaction when input is added by the user after it is called back after an event.

        const newTransaction = { date, description, category, amount };
        addTransaction(newTransaction);
        setDate('');
        setDescription('');
        setCategory('');
        setAmount('');
    }

    return (
        <div className='addtransaction'>
            <label /*This labels the input for the date bar. */ htmlFor="date">Date:</label>
            <input
                id="date"
                type='date'
                placeholder='Date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type='text'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type='text'
                placeholder='Category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <input
                type='text'
                placeholder='Amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button className='addTransaction' onClick=/*Call back the function which handles the change */{handleAddTransaction}>Add Transaction</button>
        </div>
    );
}

export default TransactionForm;
