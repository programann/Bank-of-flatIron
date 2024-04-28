// TransactionList.js
import React from 'react';
import Transaction from './Transaction';

function TransactionList({ transactions }) {
    return (
        <table className='table'>
            <th>
                <tr /*This is the title of the different columns of the tables */>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </th>
            <tb /*This is where the transactions will fall in to. */>
                {transactions.map((transaction, index) => (
                    <Transaction key={index} transaction={transaction} />
                ))}
            </tb>
        </table>
    );
}

export default TransactionList;
