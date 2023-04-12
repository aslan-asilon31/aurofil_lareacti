import React from 'react'
import '../../assets/frontend/libraries/bootstrap/css/bootstrap.css'
import '../../assets/frontend/styles/main.css'
import '../../assets/frontend/libraries/xzoom/dist/xzoom.css'

import imglogo from  '../../assets/frontend/images/logo.png'
import ic_remove from  '../../assets/frontend/images/ic_remove.png'
import ic_bank from  '../../assets/frontend/images/ic_bank.png'
import avatar1 from  '../../assets/frontend/images/avatar-1.png'
import avatar2 from  '../../assets/frontend/images/avatar-2.png'
import avatar3 from  '../../assets/frontend/images/avatar-3.png'
import avatar5 from  '../../assets/frontend/images/avatar-5.png'


function Checkout(props) {
  return (
    <>

<div className="container">
      <nav className="row navbar navbar-expand-lg navbar-light bg-white">
        <div className="navbar-nav ml-auto mr-auto mr-sm-auto mr-lg-0 mr-md-auto">
          <a className="navbar-brand" href="index.html">
            <img src={imglogo} alt="" />
          </a>
        </div>
        <ul className="navbar-nav mr-auto d-none d-lg-block">
          <li>
            <span className="text-muted"
              >| &nbsp; Beyond the explorer of the world</span
            >
          </li>
        </ul>
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
                  <li className="breadcrumb-item" aria-current="page">
                    Details
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Checkout
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 pl-lg-0">
              <div className="card card-details mb-3">
                <h1>Who is Going?</h1>
                <p>
                  Trip to Ubud, Bali, Indonesia
                </p>
                <div className="attendee">
                  <table className="table table-responsive-sm text-center">
                    <thead>
                      <tr>
                        <td scope="col">Picture</td>
                        <td scope="col">Name</td>
                        <td scope="col">Nationality</td>
                        <td scope="col">Visa</td>
                        <td scope="col">Passport</td>
                        <td scope="col"></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={avatar1}
                            alt=""
                            height="60"
                          />
                        </td>
                        <td className="align-middle">Angga Risky</td>
                        <td className="align-middle">CN</td>
                        <td className="align-middle">N/A</td>
                        <td className="align-middle">Active</td>
                        <td className="align-middle">
                          <a href="#">
                            <img src={ic_remove} alt="" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={avatar5}
                            alt=""
                            height="60"
                          />
                        </td>
                        <td className="align-middle">Galih Pratama</td>
                        <td className="align-middle">SG</td>
                        <td className="align-middle">30 Days</td>
                        <td className="align-middle">Active</td>
                        <td className="align-middle">
                          <a href="#">
                            <img src={ic_remove} alt="" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="member mt-3">
                  <h2>Add Member</h2>
                  <form className="form-inline">
                    <label className="sr-only" for="inputUsername">Name</label>
                    <input
                      type="text"
                      className="form-control mb-2 mr-sm-2"
                      id="inputUsername"
                      placeholder="Username"
                    />

                    <label
                      className="sr-only mr-2"
                      for="inlineFormCustomSelectPref"
                      >Preference</label
                    >
                    <select
                      className="custom-select mb-2 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                    >
                      <option selected value="">VISA</option>
                      <option value="2">30 Days</option>
                      <option value="3">N/A</option>
                    </select>

                    <label className="sr-only" for="doePassport"
                      >DOE Passport</label
                    >
                    <div className="input-group mb-2 mr-sm-2">
                      <input
                        type="text"
                        className="form-control datepicker"
                        id="doePassport"
                        placeholder="DOE Passport"
                      />
                    </div>

                    <button type="submit" className="btn btn-add-now mb-2 px-4">
                      Add Now
                    </button>
                  </form>
                  <h3 className="mt-2 mb-0">Note</h3>
                  <p className="disclaimer mb-0">
                    You are only able to invite member that has registered in
                    Nomads.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-details card-right">
                <h2>Checkout Information</h2>
                <table className="trip-informations">
                  <tr>
                    <th width="50%">Members</th>
                    <td width="50%" className="text-right">2 person</td>
                  </tr>
                  <tr>
                    <th width="50%">Additional Visa</th>
                    <td width="50%" className="text-right">$ 190,00</td>
                  </tr>
                  <tr>
                    <th width="50%">Trip Price</th>
                    <td width="50%" className="text-right">$ 80,00 / person</td>
                  </tr>
                  <tr>
                    <th width="50%">Sub Total</th>
                    <td width="50%" className="text-right">$ 280,00</td>
                  </tr>
                  <tr>
                    <th width="50%">Total (+Unique)</th>
                    <td width="50%" className="text-right text-total">
                      <span className="text-blue">$ 279,</span
                      ><span className="text-orange">33</span>
                    </td>
                  </tr>
                </table>

                <hr />
                <h2>Payment Instructions</h2>
                <p className="payment-instructions">
                  Please complete your payment before to continue the wonderful
                  trip
                </p>
                <div className="bank">
                  <div className="bank-item pb-3">
                    <img
                      src={ic_bank}
                      alt=""
                      className="bank-image"
                    />
                    <div className="description">
                      <h3>PT Nomads ID</h3>
                      <p>
                        0881 8829 8800
                        <br />
                        Bank Central Asia
                      </p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="bank-item">
                    <img
                      src={ic_bank}
                      alt=""
                      className="bank-image"
                    />
                    <div className="description">
                      <h3>PT Nomads ID</h3>
                      <p>
                        0899 8501 7888
                        <br />
                        Bank HSBC
                      </p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="join-container">
                <a
                  href="success.html"
                  className="btn btn-block btn-join-now mt-3 py-2"
                  >I Have Made Payment</a
                >
              </div>
              <div className="text-center mt-3">
                <a href="#" className="text-muted">Cancel Booking</a>
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

export default Checkout