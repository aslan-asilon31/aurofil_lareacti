import React from 'react'
import '../../assets/backend/vendor/fonts/boxicons.css'
import '../../assets/backend/vendor/css/core.css'
import '../../assets/backend/vendor/css/theme-default.css'
import '../../assets/backend/css/demo.css'
import '../../assets/backend/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import '../../assets/backend/vendor/libs/apex-charts/apex-charts.css'
import '../../assets/backend/vendor/css/pages/page-auth.css'


function Login(props) {
  return (
    <>

{/* <!-- Content --> */}

<div className="container-xxl">
  <div className="authentication-wrapper authentication-basic container-p-y">
    <div className="authentication-inner">
      {/* <!-- Register --> */}
      <div className="card">
        <div className="card-body">
          {/* <!-- Logo --> */}
          <div className="app-brand justify-content-center">
            <a href="index.html" className="app-brand-link gap-2">
              <span className="app-brand-text demo text-body fw-bolder">Aurofil </span>
            </a>
          </div>
          {/* <!-- /Logo --> */}
          <h4 className="mb-2">Welcome to Aslan Aurofil ! 👋</h4>
          <p className="mb-4">Please sign-in to your account and start the adventure</p>

          <form id="formAuthentication" className="mb-3" action="../dashboard/dashboard.html" method="POST">
            <div className="mb-3">
              <label for="email" className="form-label">Email or Username</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email-username"
                placeholder="Enter your email or username"
                autofocus
              />
            </div>
            <div className="mb-3 form-password-toggle">
              <div className="d-flex justify-content-between">
                <label className="form-label" for="password">Password</label>
                <a href="auth-forgot-password-basic.html">
                  <small>Forgot Password?</small>
                </a>
              </div>
              <div className="input-group input-group-merge">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  name="password"
                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  aria-describedby="password"
                />
                <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember-me" />
                <label className="form-check-label" for="remember-me"> Remember Me </label>
              </div>
            </div>
            <div className="mb-3">
              <a href="/dashboard" className="btn btn-primary d-grid w-100" type="submit">Sign in</a>
            </div>
          </form>

          <p className="text-center">
            <span>New on our platform?</span>
            <a href="/register">
              <span>Create an account</span>
            </a>
          </p>
        </div>
      </div>
      {/* <!-- /Register --> */}
    </div>
  </div>
</div>

{/* <!-- / Content --> */}

    </>
  )
}

export default Login