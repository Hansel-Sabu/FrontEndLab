import React from 'react'
import Navbar2 from './Navbar2'

const Bookmarksfail = () => {
  return (
    <><Navbar2 />
    <br/><div className="container">
          <div className="row">
              <div className="col">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div className="row g-3">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                          <div class="d-flex justify-content-center">
                            <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                              <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">No Bookmarks available</a>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                          <div class="alert alert-info" role="alert">
                            Go back to the Home page and find your favorites..
                        </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div></>
  )
}

export default Bookmarksfail