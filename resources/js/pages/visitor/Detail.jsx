import React from 'react'

import '../../assets/frontend/libraries/bootstrap/css/bootstrap.css'
import '../../assets/frontend/styles/main.css'
import '../../assets/frontend/libraries/xzoom/dist/xzoom.css'

import imglogo from  '../../assets/frontend/images/logo.png'
import detail1 from  '../../assets/frontend/images/details-1.jpg'
import event1 from  '../../assets/frontend/images/ic_event.png'
import bahasa from  '../../assets/frontend/images/ic_bahasa.png'
import foods from  '../../assets/frontend/images/ic_foods.png'
import members from  '../../assets/frontend/images/members.png'


function Detail(props) {
  return (
    <>

<style>
        {
            `
            .travel1 {
            },
            `
        }
</style>


<div className="container">
      <nav className="row navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="index.html">
          <img src={imglogo} alt="" />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navb"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Menu -->  */}
        <div className="collapse navbar-collapse" id="navb">
          <ul className="navbar-nav ml-auto mr-3">
            <li className="nav-item mx-md-2">
              <a className="nav-link active" href="index.html">Home</a>
            </li>
            <li className="nav-item mx-md-2">
              <a className="nav-link" href="#">Paket Travel</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Services
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Link 1</a>
                <a className="dropdown-item" href="#">Link 2</a>
                <a className="dropdown-item" href="#">Link 3</a>
              </div>
            </li>
            <li className="nav-item mx-md-2">
              <a className="nav-link" href="#">Testimonial</a>
            </li>
          </ul>

          {/* <!-- Mobile button -->  */}
          <form className="form-inline d-sm-block d-md-none">
            <button className="btn btn-login my-2 my-sm-0">
              Masuk
            </button>
          </form>
          {/* <!-- Desktop Button -->  */}
          <form className="form-inline my-2 my-lg-0 d-none d-md-block">
            <button className="btn btn-login btn-navbar-right my-2 my-sm-0 px-4">
              Masuk
            </button>
          </form>
        </div>
      </nav>
    </div>
    <main>
      <section className="section-details-header"></section>
      <section className="section-details-content">
        <div className="container">
          <div className="row">
            <div className="col p-0 pl-3 pl-lg-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item" aria-current="page">
                    Paket Travel
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 pl-lg-0">
              <div className="card card-details">
                <h1>Nusa Peninda</h1>
                <p>
                  Republic of Indonesia Raya
                </p>
                <div className="gallery">
                  <div className="xzoom-container">
                    <img
                      className="xzoom"
                      id="xzoom-default"
                      src={detail1}
                      xoriginal="frontend/images/details-1.jpg"
                    />
                    <div className="xzoom-thumbs d-flex">
                      <a href="frontend/images/details-1.jpg"
                        ><img
                          className="xzoom-gallery"
                          width="128"
                          src={detail1}
                          xpreview="frontend/images/details-1.jpg"
                      /></a>
                      <a href="frontend/images/details-1.jpg"
                        ><img
                          className="xzoom-gallery"
                          width="128"
                          src={detail1}
                          xpreview="frontend/images/details-1.jpg"
                      /></a>
                      <a href="frontend/images/details-1.jpg"
                        ><img
                          className="xzoom-gallery"
                          width="128"
                          src={detail1}
                          xpreview="frontend/images/details-1.jpg"
                      /></a>
                      <a href="frontend/images/details-1.jpg"
                        ><img
                          className="xzoom-gallery"
                          width="128"
                          src={detail1}
                          xpreview="frontend/images/details-1.jpg"
                      /></a>
                      <a href="frontend/images/details-1.jpg"
                        ><img
                          className="xzoom-gallery"
                          width="128"
                          src={detail1}
                          xpreview="frontend/images/details-1.jpg"
                      /></a>
                    </div>
                  </div>
                  <h2>Tentang Wisata</h2>
                  <p>
                    Nusa Penida is an island southeast of Indonesia’s island
                    Bali and a district of Klungkung Regency that includes the
                    neighbouring small island of Nusa Lembongan. The Badung
                    Strait separates the island and Bali. The interior of Nusa
                    Penida is hilly with a maximum altitude of 524 metres. It is
                    drier than the nearby island of Bali.
                  </p>
                  <p>
                    Bali and a district of Klungkung Regency that includes the
                    neighbouring small island of Nusa Lembongan. The Badung
                    Strait separates the island and Bali.
                  </p>
                  <div className="features row pt-3">
                    <div className="col-md-4">
                      <img
                        src={event1}
                        alt=""
                        className="features-image"
                      />
                      <div className="description">
                        <h3>Featured Ticket</h3>
                        <p>Tari Kecak</p>
                      </div>
                    </div>
                    <div className="col-md-4 border-left">
                      <img
                        src={bahasa}
                        alt=""
                        className="features-image"
                      />
                      <div className="description">
                        <h3>Language</h3>
                        <p>Bahasa Indonesia</p>
                      </div>
                    </div>
                    <div className="col-md-4 border-left">
                      <img
                        src={foods}
                        alt=""
                        className="features-image"
                      />
                      <div className="description">
                        <h3>Foods</h3>
                        <p>Local Foods</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-details card-right">
                <h2>Members are going</h2>
                <div className="members my-2">
                  <img src={members} alt="" className="w-75" />
                </div>
                <hr />
                <h2>Trip Informations</h2>
                <table className="trip-informations">
                  <tr>
                    <th width="50%">Date of Departure</th>
                    <td width="50%" className="text-right">22 Aug, 2019</td>
                  </tr>
                  <tr>
                    <th width="50%">Duration</th>
                    <td width="50%" className="text-right">4D 3N</td>
                  </tr>
                  <tr>
                    <th width="50%">Type</th>
                    <td width="50%" className="text-right">Open Trip</td>
                  </tr>
                  <tr>
                    <th width="50%">Price</th>
                    <td width="50%" className="text-right">$80,00 / person</td>
                  </tr>
                </table>
              </div>
              <div className="join-container">
                <a href="/checkout" className="btn btn-block btn-join-now mt-3 py-2"
                  >Join Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="section-footer mt-5 mb-4 border-top">
      <div className="container pt-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 col-lg-3">
                    <h5>FEATURES</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Reviews</a>
                      </li>
                      <li>
                        <a href="#">Community</a>
                      </li>
                      <li>
                        <a href="#">Social Media Kit</a>
                      </li>
                      <li>
                        <a href="#">Affiliate</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-3">
                    <h5>ACCOUNT</h5>
                    <ul className="list-unstyled">
                      <li><a href="#">Refund</a></li>
                      <li><a href="#">Security</a></li>
                      <li><a href="#">Rewards</a></li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-3">
                    <h5>COMPANY</h5>
                    <ul className="list-unstyled">
                      <li><a href="#">Career</a></li>
                      <li><a href="#">Help Center</a></li>
                      <li><a href="#">Media</a></li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-3">
                    <h5>Get Connected</h5>
                    <ul className="list-unstyled">
                      <li>Jakarta Selatan</li>
                      <li>Indonesia</li>
                      <li>0821 - 2222 - 8888</li>
                      <li>support@nomads.id</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="row border-top justify-content-center align-items-center pt-4"
        >
          <div className="col-auto text-gray-500 font-weight-light">
            2019 Copyright Nomads • All rights reserved • Made in Jakarta
          </div>
        </div>
      </div>
    </footer>
      
    </>
  )
}

export default Detail