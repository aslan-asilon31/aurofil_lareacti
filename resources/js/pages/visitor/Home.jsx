import React from 'react'

import '../../assets/frontend/libraries/bootstrap/css/bootstrap.css'
import '../../assets/frontend/styles/main.css'

import img1 from  '../../assets/frontend/images/travel-1.jpg'
import img2 from  '../../assets/frontend/images/travel-2.jpg'
import img3 from  '../../assets/frontend/images/travel-3.jpg'
import img4 from  '../../assets/frontend/images/travel-4.jpg'
import imglogo from  '../../assets/frontend/images/logo.png'
import imgpartner from  '../../assets/frontend/images/partner.png'
import avatar1 from  '../../assets/frontend/images/avatar-1.png'
import avatar2 from  '../../assets/frontend/images/avatar-2.png'
import avatar3 from  '../../assets/frontend/images/avatar-3.png'

import travel1 from  '../../assets/frontend/images/travel-1.jpg'
import travel2 from  '../../assets/frontend/images/travel-2.jpg'
import travel3 from  '../../assets/frontend/images/travel-3.jpg'
import travel4 from  '../../assets/frontend/images/travel-4.jpg'

function Home(props) {
  return (
    <>
      <style>
        {
            `.imge1 {
                background-image: url('');
            },
            `
        }
      </style>

    {/* <!-- Bootstrap navbar example --> */}
    {/* <!-- https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp --> */}
    <div className="container">
      <nav className="row navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">
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

        {/* <!-- Menu --> */}
        <div className="collapse navbar-collapse" id="navb">
          <ul className="navbar-nav ml-auto mr-3">
            <li className="nav-item mx-md-2">
              <a className="nav-link active" href="#">Home</a>
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

          {/* <!-- Mobile button --> */}
          <form className="form-inline d-sm-block d-md-none">
            <button className="btn btn-login my-2 my-sm-0">
              Masuk
            </button>
          </form>
          {/* <!-- Desktop Button --> */}
          <form className="form-inline my-2 my-lg-0 d-none d-md-block">
            <button className="btn btn-login btn-navbar-right my-2 my-sm-0 px-4">
              Masuk
            </button>
          </form>
        </div>
      </nav>
    </div>
    <header className="text-center">
      <h1>
        Explore The Beautiful World
        <br />
        As Easy One Click
      </h1>
      <p className="mt-3">
        You will see beautiful
        <br />
        moment you never see before
      </p>
      <a href="#" className="btn btn-get-started px-4 mt-4">
        Get Started
      </a>
    </header>
    <main>
      <div className="container">
        <section className="section-stats row justify-content-center" id="stats">
          <div className="col-3 col-md-2 stats-detail">
            <h2>20K</h2>
            <p>Members</p>
          </div>
          <div className="col-3 col-md-2 stats-detail">
            <h2>12</h2>
            <p>Countries</p>
          </div>
          <div className="col-3 col-md-2 stats-detail">
            <h2>3K</h2>
            <p>Hotels</p>
          </div>
          <div className="col-3 col-md-2 stats-detail">
            <h2>72</h2>
            <p>Partners</p>
          </div>
        </section>
      </div>
      <section className="section-popular" id="popular">
        <div className="container">
          <div className="row">
            <div className="col text-center section-popular-heading">
              <h2>Wisata Popular</h2>
              <p>
                Something that you never try
                <br />
                before in this world
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-popular-content" id="popularContent">
        <div className="container">
          <div className="section-popular-travel row justify-content-center">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card-travel text-center d-flex flex-column "
                style={{ backgroundImage: `url(${travel1})` }}
              >
                <div className="travel-country">INDONESIA</div>
                <div className="travel-location">DERATAN, BALI</div>
                <div className="travel-button mt-auto">
                  <a href="/detail" className="btn btn-travel-details px-4">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card-travel text-center d-flex flex-column "
                style={{ backgroundImage: `url(${travel2})` }}
              >
                <div className="travel-country">INDONESIA</div>
                <div className="travel-location">BROMO, MALANG</div>
                <div className="travel-button mt-auto">
                  <a href="/detail" className="btn btn-travel-details px-4">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card-travel text-center d-flex flex-column "
                style={{ backgroundImage: `url(${travel3})` }}
              >
                <div className="travel-country">INDONESIA</div>
                <div className="travel-location">NUSA PENIDA</div>
                <div className="travel-button mt-auto">
                  <a href="/detail" className="btn btn-travel-details px-4">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card-travel text-center d-flex flex-column "
                style={{ backgroundImage: `url(${travel4})` }}
              >
                <div className="travel-country">INDONESIA</div>
                <div className="travel-location">DUBAI</div>
                <div className="travel-button mt-auto">
                  <a href="/detail" className="btn btn-travel-details px-4">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-networks" id="networks">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Our Networks</h2>
              <p>
                Companies are trusted us
                <br />
                more than just a trip
              </p>
            </div>
            <div className="col-md-8 text-center">
              <img src={imgpartner} className="img-patner" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-testimonials-heading" id="testimonialsHeading">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2>They Are Loving Us</h2>
              <p>
                Moments were giving them
                <br />
                the best experience
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-testimonials-content" id="testimonialsContent">
        <div className="container">
          <div
            className="section-popular-travel row justify-content-center match-height"
          >
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card card-testimonial text-center">
                <div className="testimonial-content">
                  <img
                    src={avatar1}
                    alt=""
                    className="mb-4 rounded-circle"
                  />
                  <h3 className="mb-4">Angga Risky</h3>
                  <p className="testimonials">
                    “ It was glorious and I could not stop to say wohooo for
                    every single moment Dankeeeeee “
                  </p>
                </div>
                <hr />
                <p className="trip-to mt-2">Trip to Ubud</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card card-testimonial text-center">
                <div className="testimonial-content">
                  <img
                    src={avatar1}
                    alt=""
                    className="mb-4 rounded-circle"
                  />
                  <h3 className="mb-4">Shayna</h3>
                  <p className="testimonials">
                    “ The trip was amazing and I saw something beautiful in that
                    Island that makes me want to learn more “
                  </p>
                </div>
                <hr />
                <p className="trip-to mt-2">Trip to Nusa Penida</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="card card-testimonial text-center">
                <div className="testimonial-content mb-auto">
                  <img
                    src={avatar1}
                    alt=""
                    className="mb-4 rounded-circle"
                  />
                  <h3 className="mb-4">Shabrina</h3>
                  <p className="testimonials">
                    “ I loved it when the waves was shaking harder — I was
                    scared too “
                  </p>
                </div>
                <hr />
                <p className="trip-to mt-2">Trip to Karimun Jawa</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <a href="#" className="btn btn-need-help px-4 mt-4 mx-1">
                I Need Help
              </a>
              <a href="#" className="btn btn-get-started px-4 mt-4 mx-1">
                Get Started
              </a>
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

export default Home