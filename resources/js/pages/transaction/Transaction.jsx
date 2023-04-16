import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

import Form from 'react-bootstrap/Form';

import '../../assets/backend/vendor/fonts/boxicons.css'
import '../../assets/backend/vendor/css/core.css'
import '../../assets/backend/vendor/css/theme-default.css'
import '../../assets/backend/css/demo.css'
import '../../assets/backend/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import '../../assets/backend/vendor/libs/apex-charts/apex-charts.css'

// components
import SideBar from '../../components/backend/SideBar'
import TopBar from '../../components/backend/TopBar'
import Footer from '../../components/backend/Footer'


function Transaction(props) {


  const [transactions, setTransactions] = useState([])

  useEffect(()=>{
      fetchTransactions() 
  },[])

  const fetchTransactions = async () => {
      await axios.get(`http://localhost:8000/api/transactions`).then(({data})=>{
          setTransactions(data)
      })
  }

  async function search(key) {
    console.warn(key);
    let result = await fetch("http://localhost:8000/api/searchtransaction/" + key);
    result = await result.json();
    setTransactions(result);
  }

  const deleteTransaction = async (id) => {
    const isConfirm = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        return result.isConfirmed
      });

      if(!isConfirm){
        return;
      }

      await axios.delete(`http://localhost:8000/api/transactions/${id}`).then(({data})=>{
        Swal.fire({
            icon:"success",
            text:data.message
        })
        fetchTransactions()
      }).catch(({response:{data}})=>{
        Swal.fire({
            text:data.message,
            icon:"error"
        })
      })
    }



    return (
        <>
    
    <style>
            {
                `.w40h40 {
                    width:40px;
                    height:40px;
                },
                .dfl{
                  display:flex;
                }
                `
            }
        </style>
    
    {/* <!-- Layout wrapper --> */}
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            {/* <!-- Menu --> */}
    
            <SideBar />
            {/* <!-- / Menu --> */}
    
            {/* <!-- Layout container --> */}
            <div className="layout-page">
              {/* <!-- Navbar --> */}
    
                <TopBar />
    
              {/* <!-- / Navbar --> */}
    
              {/* <!-- Content wrapper --> */}
              <div className="content-wrapper">
                {/* <!-- Content --> */}
    
                <div className="container-xxl flex-grow-1 container-p-y">
                  {/* <!-- Contextual Classes --> */}
    
                  <div className="card">
                    <h5 className="card-header">Transaction List</h5>
                    <div className="table-responsive text-nowrap">
                      <div className="m-3">
                        <div className="col-12 text-white d-flex">
                          <Form className="d-flex">
                            <Form.Control
                              onChange={(e) => search(e.target.value)}
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                            />
                          </Form>
                          <Button className='btn btn-primary mb-3 text-white float-end  ml-3 me-2' to={"/transaction/create"}>
                              Create Transaction
                          </Button>
                        </div>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Travel Package ID</th>
                              <th>User ID</th>
                              <th>Additional Visa</th>
                              <th>Transaction Total</th>
                              <th>Transaction Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                transactions.length > 0 && (
                                  transactions.map((row, key)=>(
                                        <tr key={key}>
                                            <td>{row.travel_package_id}</td>
                                            <td>{row.user_id}</td>
                                            <td>{row.additional_visa}</td>
                                            <td>{row.transaction_total}</td>
                                            <td>{row.transaction_status}</td>
                                            <td>
                                                <Button to={`/transaction/edit/${row.id}`} className='btn btn-success me-2'>
                                                    Edit
                                                </Button>
                                                <Button variant="danger" onClick={()=>deleteTransaction(row.id)}>
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
    
                            <tr>
                              <td></td>
                              <td colSpan={2} className="text-right">Total</td>
                              <td>Rp 1000</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ Contextual Classes --> */}
                </div>
                {/* <!-- / Content --> */}
    
                {/* <!-- Footer --> */}
                <Footer/>
                {/* <!-- / Footer --> */}
    
                <div className="content-backdrop fade"></div>
              </div>
              {/* <!-- Content wrapper --> */}
            </div>
            {/* <!-- / Layout page --> */}
          </div>
    
          {/* <!-- Overlay --> */}
          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
        {/* <!-- / Layout wrapper --> */}
    
        </>
      )
}

export default Transaction