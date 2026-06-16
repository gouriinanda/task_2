//import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <nav class="navbar navbar-expand-lg bg-warning">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Registrations</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link  class="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to='/studreg'>Student Registration</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to='/empreg'>Employee Registration</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to='/hosreg'>Hospital Registration</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to='/jobapp'>Job Application</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to='/eventreg'>Event Registration </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to='/colgadm'>College Admission </Link>
                </li>




              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
