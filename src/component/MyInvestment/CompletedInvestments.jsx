import React from "react";
import './css/investmentTable.css';
import Table from 'react-bootstrap/Table';
import transactions from "../../UserTransactions/transactions";

const CompletedInvestments = () => {
    return(
         <>
        <h3 className="table-heading">Completed Transactions</h3>
        <div>
            <Table striped bordered variant="dark" >
      <thead>
        <tr>
          <th>Sender </th>
          <th>Amount</th>
          <th>Receiver</th>
          <th>Status</th>
        </tr>
      </thead>
      
        <tbody >

        {transactions.map((transaction, index)=>{
          return(
            <tr key={index}>
          <td>{transaction.type}</td>
          <td>{transaction.time}</td>
          <td>{transaction.amount}</td>
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

export default CompletedInvestments;