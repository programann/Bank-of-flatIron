import React from 'react';
import Transaction from './Transaction';

function TransactionList({ transactions }) {
    return (
        <table className='table'>
            <thead /*The title of the columns */>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody /*Where the transactions will be appended after being submitted in the transaction form. */>
                {transactions.map((transaction, index) => (
                    <Transaction key={index} transaction={transaction} />
                ))}
            </tbody>
        </table>
    );
}

export default TransactionList;
