import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

//import Link
import { Link } from '@inertiajs/inertia-react';

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



function travelPackage(props) {
  
  const [travelpackages, setTravelpackages] = useState([])

  useEffect(()=>{
      fetchTravelpackages() 
  },[])

  const fetchTravelpackages = async () => {
      await axios.get(`http://localhost:8000/api/travelpackages`).then(({data})=>{
          setTravelpackages(data)
      })
  }

  async function search(key) {
    console.warn(key);
    let result = await fetch("http://localhost:8000/api/searchtravelpackage/" + key);
    result = await result.json();
    setTravelpackages(result);
  }

  const deleteTravelpackage = async (id) => {
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

      await axios.delete(`http://localhost:8000/api/travelpackages/${id}`).then(({data})=>{
        Swal.fire({
            icon:"success",
            text:data.message
        })
        fetchTravelpackages()
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
                  <h5 className="card-header">Travel Package List</h5>
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
                        <Link href="/travelpackage/create" className='btn btn-primary mb-3 text-white float-end  ml-3 me-2'>
                          Create Travel Package
                        </Link>
                      </div>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Slug</th>
                            <th>Location</th>
                            <th>about</th>
                            <th>featured_event</th>
                            <th>language</th>
                            <th>foods</th>
                            <th>departure_date</th>
                            <th>duration</th>
                            <th>type</th>
                            <th>price</th>
                            <th>Created</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                              travelpackages.length > 0 && (
                                travelpackages.map((row, key)=>(
                                      <tr key={key}>
                                          <td>
                                              <img width="50px" src={`http://localhost:8000/storage/travelpackage/image/${row.image}`} />
                                          </td>
                                          <td>{row.title}</td>
                                          <td>{row.slug}</td>
                                          <td>{row.location}</td>
                                          <td>{row.about}</td>
                                          <td>{row.featured_event}</td>
                                          <td>{row.language}</td>
                                          <td>{row.foods}</td>
                                          <td>{row.departure_date}</td>
                                          <td>{row.duration}</td>
                                          <td>{row.type}</td>
                                          <td>{row.price}</td>
                                          <td>{row.created_at}</td>
                                          <td>
                                              <Button to={`/travelpackage/edit/${row.id}`} className='btn btn-success me-2'>
                                                  Edit
                                              </Button>
                                              <Button variant="danger" onClick={()=>deleteTravelpackage(row.id)}>
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

export default travelPackage