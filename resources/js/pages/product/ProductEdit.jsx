import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

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

function ProductEdit(props) {
 
    const navigate = useNavigate();

    const { id } = useParams()
  
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [validationError,setValidationError] = useState({})
  
    useEffect(()=>{
      fetchProduct()
    },[])
  
    const fetchProduct = async () => {
      await axios.get(`http://localhost:8000/api/products/${id}`).then(({data})=>{
        const { name, detail } = data.product
        setName(name)
        setDetail(detail)
      }).catch(({response:{data}})=>{
        Swal.fire({
          text:data.message,
          icon:"error"
        })
      })
    }
  
    const changeHandler = (event) => {
          setImage(event.target.files[0]);
      };
  
    const updateProduct = async (e) => {
      e.preventDefault();
  
      const formData = new FormData()
      formData.append('_method', 'PATCH');
      formData.append('name', name)
      formData.append('detail', detail)
  
      await axios.post(`http://localhost:8000/api/products/${id}`, formData).then(({data})=>{
        Swal.fire({
          icon:"success",
          text:data.message
        })
        navigate("/product")
      }).catch(({response})=>{
        if(response.status===422){
          setValidationError(response.data.errors)
        }else{
          Swal.fire({
            text:response.data.message,
            icon:"error"
          })
        }
      })
    }

  return (
    <>
        {/* <!-- Layout wrapper --> */}
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                {/* <!-- Menu --> */}

                <SideBar/>
                {/* <!-- / Menu --> */}

                {/* <!-- Layout container --> */}
                <div className="layout-page">
                {/* <!-- Navbar --> */}

                <TopBar/>


                {/* <!-- / Navbar --> */}

                {/* <!-- Content wrapper --> */}
                <div className="content-wrapper">
                    {/* <!-- Content --> */}

                    <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4">Add Product</h4>

                    <div className="row">


                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Update Product</h4>
                        <hr />
                        <div className="form-wrapper">
                            {
                            Object.keys(validationError).length > 0 && (
                                <div className="row">
                                <div className="col-12">
                                    <div className="alert alert-danger">
                                    <ul className="mb-0">
                                        {
                                        Object.entries(validationError).map(([key, value])=>(
                                            <li key={key}>{value}</li>   
                                        ))
                                        }
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            )
                            }
                            <Form onSubmit={updateTransaction}>
                            <Row> 
                                <Col>
                                    <Form.Group controlId="Name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" value={name} onChange={(event)=>{
                                        setName(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>
                            <Row> 
                                <Col>
                                    <Form.Group controlId="Detail">
                                        <Form.Label>Detail</Form.Label>
                                        <Form.Control type="text" value={detail} onChange={(event)=>{
                                        setDetail(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>
               
                            <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                                Update
                            </Button>
                            </Form>
                        </div>
                        </div>
                    </div>



                        {/* <!-- Form controls --> */}
                        <div className="col-md-6">
                        <div className="card mb-4">
                        </div>
                        </div>

                        </div>
                        </div>
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
        {/* </div> */}
        {/* <!-- / Layout wrapper --> */}
    </>
  )
}

export default ProductEdit