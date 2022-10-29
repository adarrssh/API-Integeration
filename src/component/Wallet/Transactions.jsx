import React from "react";
import './css/transactions.css'
import transactions from "../../UserTransactions/transactions";
import Table from 'react-bootstrap/Table';




const Transactions = () => {
  return (
    <>
      <div className="transaction-table-container">
        <Table striped bordered variant="dark">
      <thead>
        <tr>
          <th>Transaction Type</th>
          <th>Amount</th>
          <th>Transaction time</th>
          <th>Status</th>
        </tr>
      </thead>
      
        <tbody >

        {transactions.map((transaction, index)=>{
          return(
            <tr key={index}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.time}</td>
          <td className={transaction.status}>{transaction.status}</td>
        </tr>
          )
        })}
        
      </tbody>
      
      
    </Table>
      </div>
    </>
  )
}

export default Transactions;
