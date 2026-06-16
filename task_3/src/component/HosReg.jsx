//import React from 'react'
import Navbar from './Navbar'

const HosReg = () => {
    <Navbar/>
  return (
    <div>
      <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1 className="m-4 p-2 text-danger shadow rounded">
                    Hospital Registration
                </h1>
                <div className="row m-3">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-control m-3">Patient Name</label>
                        <input type="text" name="pname" id="" className="form-control m-3" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-control m-3">Age</label>
                        <input type="text" name="age" id="" className="form-control m-3" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-control m-3">Gender</label>
                        <select name="gender" id="" className='form-select m-3'>
                          <option value="" disabled>Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>   
                          <option value="others">Others</option>
                        </select>
                    </div>
                   
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-control m-3">Contact Number</label>
                        <input type="text" name="contactnum" id="" className="form-control m-3" />
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

export default HosReg
