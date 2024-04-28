import React, { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import SearchInput from './components/SearchInput';

function App() {
  //An array of transactions to be dispalyed in the page by default
    const [transactions, setTransactions] = useState([
        { date: "2019-08-07", description: "Movies", category: "Entertainment", amount: 100 },
        { date: "2019-07-07", description: "Chipotle", category: "Food", amount: 200 },
        { date: "2013-12-07", description: "Sunglasses, UrbanOutfitters", category: "Fashion", amount: 700 },
        { date: "2000-05-07", description: "Paycheck from Bob's burgers", category: "Income", amount: 200 }
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    function addTransaction(newTransaction){
        setTransactions([...transactions, newTransaction]);
    }

    //The search funtionality using .filter()

    const filteredTransactions = transactions.filter(transaction =>
      //Using toLowerCase() which converts all the transaction descriptions to lowercase and the searched term to lowercase to give all possibilities of the input.
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
