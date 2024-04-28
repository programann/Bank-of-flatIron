// App.js
import React, { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import SearchInput from './components/SearchInput';

function App() {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const addTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
    }

    const filteredTransactions = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='App'>
            <h1 className='header'>The Royal Bank of Flatiron</h1>
            <SearchInput setSearchTerm={setSearchTerm} />
            <TransactionForm addTransaction={addTransaction} />
            <TransactionList transactions={filteredTransactions} />
        </div>
    );
}

export default App;
