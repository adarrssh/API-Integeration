import React from "react";
import './css/investmentTable.css';
import Table from 'react-bootstrap/Table';




const ActiveInvestments = ({ InvestArr }) => {

 


  return (
    <>
      <br />
      <h3 className="table-heading">Active Transactions</h3>
      <div>
        <Table striped bordered variant="dark" >
          <thead>
            <tr>
              <th>Type </th>
              <th>Principal</th>
              <th>ROI</th>
              <th>Profit</th>
            </tr>
          </thead>

          <tbody >

            {InvestArr.map((el, index) => {

              let roi =  el.Roi.replace('%','')
              let  profit = el.Principal*(Number(roi)/10)


              return (
                <tr key={index}>
                  <td>{el.Plan_Type}</td>
                  <td>{el.Principal}</td>
                  <td>{el.Roi}</td>
                  <td >{profit}</td>
                </tr>
              )
            })}

          </tbody>


        </Table>
      </div>
    </>
  )
}

export default ActiveInvestments;