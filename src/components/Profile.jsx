import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'

const Profile = () => {
  return (
    <><Navbar2 />
    <div className="container">
          <div className="row">
              <div className="col">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div className="row g-3">
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                              <label htmlFor="" className="form-label">Enter your Username</label>
                              <input type="text" className="form-control" />
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                              <label for="inputPassword5" class="form-label">Password</label>
                              <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
                              <div id="passwordHelpBlock" class="form-text"></div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                              <label htmlFor="" className="form-label">.</label>
                              <p><a href="#" class="link-primary">Forgot password?</a></p>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                              <button className="btn btn-success">Login</button>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                              <p class="fs-3">Or Continue With </p>

                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                              <div className="row">
                                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                      <a href="#" class="text-decoration-none">Google</a>
                                  </div>
                                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                      <a href="#" class="text-decoration-none">Twitter</a>
                                  </div>
                                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                      <a href="#" class="text-decoration-none">Facebook</a>
                                  </div>
                              </div>
                          </div>


                      </div>
                  </div>
              </div>
          </div>
      </div></>
  )
}

export default Profile