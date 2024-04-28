// TransactionList.js
import React from 'react';
import Transaction from './Transaction';

function TransactionList() {
    const transactions = [
        { date: "2019-08-07", description: "Movies", category: "Entertainment", amount: 100 },
        { date: "2019-07-07", description: "Chipotle", category: "Food", amount: 200 },
        { date: "2013-12-07", description: "Sunglasses, UrbanOutfitters", category: "Fashion", amount: 700 },
        { date: "2000-05-07", description: "Paycheck from Bob's burgers", category: "Income", amount: 200 },
    ];

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <Transaction key={index} transaction={transaction} />
                ))}
            </tbody>
        </table>
    );
}

export default TransactionList;
