import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom'

//import Link
import { Link } from '@inertiajs/inertia-react';

import '../../assets/backend/vendor/fonts/boxicons.css'
import '../../assets/backend/vendor/css/core.css'
import '../../assets/backend/vendor/css/theme-default.css'
import '../../assets/backend/css/demo.css'
import '../../assets/backend/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import '../../assets/backend/vendor/libs/apex-charts/apex-charts.css'
import SideBar from '../../components/backend/SideBar';
import Footer from '../../components/backend/Footer'

function travelPackageAdd(props) {
    // const navigate = useNavigate();

    const [image, setImage] = useState()
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [location, setLocation] = useState("")
    const [about, setAbout] = useState("")
    const [featured_event, setFeatured_event] = useState("")
    const [language, setLanguage] = useState("")
    const [foods, setFoods] = useState("")
    const [duration, setDuration] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")
    const [departure_date, setDeparture_date] = useState("")
    const [validationError,setValidationError] = useState({})
  
    const changeHandler = (event) => {
          setImage(event.target.files[0]);
      };
  
    const createTravelpackage = async (e) => {
      e.preventDefault();
  
      const formData = new FormData()
  
      formData.append('image', image)
      formData.append('title', title)
      formData.append('slug', slug)
      formData.append('location', location)
      formData.append('about', about)
      formData.append('featured_event', featured_event)
      formData.append('language', language)
      formData.append('foods', foods)
      formData.append('departure_date', departure_date)
      formData.append('duration', duration)
      formData.append('type', type)
      formData.append('price', price)
  
      await axios.post(`http://localhost:8000/api/travelpackages`, formData).then(({data})=>{
        Swal.fire({
          icon:"success",
          text:data.message
        })
        navigate("/travelpackage")
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

                <nav
                    className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                    id="layout-navbar"
                >
                    <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" href="">
                        <i className="bx bx-menu bx-sm"></i>
                    </a>
                    </div>

                    <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    {/* <!-- Search --> */}
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                        <i className="bx bx-search fs-4 lh-0"></i>
                        <input
                            type="text"
                            className="form-control border-0 shadow-none"
                            placeholder="Search..."
                            aria-label="Search..."
                        />
                        </div>
                    </div>
                    {/* <!-- /Search --> */}

                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        {/* <!-- Place this tag where you want the button to render. --> */}
                        <li className="nav-item lh-1 me-3">
                        <a
                            className="github-button"
                            href="https://github.com/themeselection/sneat-html-admin-template-free"
                            data-icon="octicon-star"
                            data-size="large"
                            data-show-count="true"
                            aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                            >Star</a>
                        </li>

                        {/* <!-- User --> */}
                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                        <a className="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown">
                            <div className="avatar avatar-online">
                            <img src="../../assets/backend/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                            <a className="dropdown-item" href="#">
                                <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar avatar-online">
                                    <img src="../../assets/backend/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <span className="fw-semibold d-block">John Doe</span>
                                    <small className="text-muted">Admin</small>
                                </div>
                                </div>
                            </a>
                            </li>
                            <li>
                            <div className="dropdown-divider"></div>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="bx bx-user me-2"></i>
                                <span className="align-middle">My Profile</span>
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="bx bx-cog me-2"></i>
                                <span className="align-middle">Settings</span>
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <span className="d-flex align-items-center align-middle">
                                <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                <span className="flex-grow-1 align-middle">Billing</span>
                                <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                </span>
                            </a>
                            </li>
                            <li>
                            <div className="dropdown-divider"></div>
                            </li>
                            <li>
                            <a className="dropdown-item" href="auth-login-basic.html">
                                <i className="bx bx-power-off me-2"></i>
                                <span className="align-middle">Log Out</span>
                            </a>
                            </li>
                        </ul>
                        </li>
                        {/* <!--/ User --> */}
                    </ul>
                    </div>
                </nav>

                {/* <!-- / Navbar --> */}

                {/* <!-- Content wrapper --> */}
                <div className="content-wrapper">
                    {/* <!-- Content --> */}

                    <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4">Add Product</h4>

                    <div className="row">

                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Create Product</h4>
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
                            <Form onSubmit={createTravelpackage}>

                            <Row>
                                <Col>
                                <Form.Group controlId="Image" className="mb-3">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" onChange={changeHandler} />
                                </Form.Group>
                                </Col>
                            </Row>

                            <Row> 
                                <Col>
                                    <Form.Group controlId="Title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" value={title} onChange={(event)=>{
                                        setTitle(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>

                            <Row> 
                                <Col>
                                    <Form.Group controlId="Slug">
                                        <Form.Label>Slug</Form.Label>
                                        <Form.Control type="text" value={slug} onChange={(event)=>{
                                        setSlug(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>

                            <Row> 
                                <Col>
                                    <Form.Group controlId="Location">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control type="text" value={location} onChange={(event)=>{
                                        setLocation(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>

                            <Row> 
                                <Col>
                                    <Form.Group controlId="About">
                                        <Form.Label>About</Form.Label>
                                        <Form.Control type="text" value={about} onChange={(event)=>{
                                        setAbout(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>

                            <Row> 
                                <Col>
                                    <Form.Group controlId="FeaturedEvent">
                                        <Form.Label>Featured Event</Form.Label>
                                        <Form.Control type="text" value={featured_event} onChange={(event)=>{
                                        setFeatured_event(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>

                            <Row> 
                                <Col>
                                    <Form.Group controlId="Language">
                                        <Form.Label>Language</Form.Label>
                                        <Form.Control type="text" value={language} onChange={(event)=>{
                                        setLanguage(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>

                            <Row> 
                                <Col>
                                    <Form.Group controlId="Foods">
                                        <Form.Label>Foods</Form.Label>
                                        <Form.Control type="text" value={foods} onChange={(event)=>{
                                        setFoods(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>

                            <Row> 
                                <Col>
                                    <Form.Group controlId="DepartureDate">
                                        <Form.Label>Departure Date</Form.Label>
                                        <Form.Control type="date" value={departure_date} onChange={(event)=>{
                                        setDeparture_date(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>
                            
                            <Row> 
                                <Col>
                                    <Form.Group controlId="Duration">
                                        <Form.Label>Duration</Form.Label>
                                        <Form.Control type="text" value={duration} onChange={(event)=>{
                                        setDuration(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>
                            
                            <Row> 
                                <Col>
                                    <Form.Group controlId="Type">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control type="text" value={type} onChange={(event)=>{
                                        setType(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>
                            
                            <Row> 
                                <Col>
                                    <Form.Group controlId="Price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" value={price} onChange={(event)=>{
                                        setPrice(event.target.value)
                                        }}/>
                                    </Form.Group>
                                </Col>  
                            </Row>

                            <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                                Save
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
                    <Footer />
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

export default travelPackageAdd