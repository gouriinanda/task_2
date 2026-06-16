//import React from 'react'
import Navbar from './Navbar'

const JobApp = () => {
  <Navbar />
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <h1 className="m-4 p-2 text-danger shadow rounded">
                Job Application
              </h1>
              <div className="row m-3">
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-control m-3">Name</label>
                  <input type="text" name="name" id="" className="form-control m-3" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-control m-3">Email</label>
                  <input type="email" name="email" id="" className="form-control m-3" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-control m-3">Experience</label>
                  <input type="text" name="experience" id="" className="form-control m-3" />
                </div>
                 <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-control m-3">Resume Upload</label>
                  <input type="file" name="resume" id="" className="form-control m-3" />
                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button className="btn btn-success">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobApp
