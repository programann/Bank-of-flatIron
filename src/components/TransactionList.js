// TransactionList.js
import React from 'react';
import Transaction from './Transaction';

function TransactionList({ transactions }) {
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
