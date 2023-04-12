import React from 'react'

function SideBar() {
    return (
        <>
                <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <a href="index.html" className="app-brand-link">

              <span className="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
            </a>

            <a href="" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
            {/* <!-- Dashboard --> */}
            <li className="menu-item active">
              <a href="/dashboard" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </a>
            </li>

            <li className="menu-item ">
              <a href="/product" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Product</div>
              </a>
            </li>

            <li className="menu-item">
              <a href="/user" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">User Management</div>
              </a>
            </li>

            <li className="menu-item ">
              <a href="../report/report.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Report</div>
              </a>
            </li>

            <li className="menu-item ">
              <a href="/category" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Category</div>
              </a>
            </li>

          </ul>
        </aside>
        </>
    );
}

export default SideBar;
