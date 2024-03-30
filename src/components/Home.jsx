import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <><Navbar /><div className="container">
          <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                          <div id="carouselExample" class="carousel slide">
                              <div class="carousel-inner">
                                  <div class="carousel-item active">
                                      <img src="https://img.freepik.com/free-photo/beef-vegetables-sesame-seeds-white-plate-isolated-white-background_123827-20767.jpg?t=st=1710560892~exp=1710564492~hmac=5da4d688537200145dbec28819c88586f9999ea617aec94229ab3e04367c7ffb&w=1060" class="d-block w-100" alt="..." />
                                  </div>
                                  <div class="carousel-item">
                                      <img src="https://img.freepik.com/free-photo/grilled-cod-with-vegetables-plate-isolated-white-background_123827-20355.jpg?t=st=1710560854~exp=1710564454~hmac=fb7a26243b56b68c8dddf927da37151149555b98fdbc2d186ca626d168721804&w=1060" class="d-block w-100" alt="..." />
                                  </div>
                                  <div class="carousel-item">
                                      <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=740&t=st=1710560746~exp=1710561346~hmac=19ddeee864699a81bb700a3136ab05fa02e5cd873fd4f73803179dc72edc843d" class="d-block w-100" alt="..." />
                                  </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Next</span>
                              </button>
                          </div>
                      </div>
                      <br />
                      <p class="fs-1">Fresh Our Community</p>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                          <div class="card border-warning mb-3">
                              <div class="card-header">Reviews</div>
                              <div class="card-body">
                                  <h5 class="card-title">HOW TO MAKE EASTER HAM, 16 WAYS</h5>
                                  <p class="card-text">Wondering what to cook for Easter lunch or dinner? Our holiday table always starts with a ham. For whole ham recipes and all the best glazes, keep reading! </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                          <div class="card border-warning mb-3">
                              <div class="card-header">Reviews</div>
                              <div class="card-body">
                                  <h5 class="card-title">GulperXof reviewed BestCookieGuy</h5>
                                  <p class="card-text">My mom is diabetic and I made this using Stevia since she handles that much better. It cooked up beautifully and probably brought the calories down to 100 per serving.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                          <div class="card border-warning mb-3">
                              <div class="card-header">Reviews</div>
                              <div class="card-body">
                                  <h5 class="card-title">Alfredo with Shrimp,Asparagus</h5>
                                  <p class="card-text">The amount of lemon juice in this entirely overwhelms all other flavor, no Parmesan or shrimp flavor really comes through. Just not a good ratio at all.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                          <div class="card border-warning mb-3">
                              <div class="card-header">Reviews</div>
                              <div class="card-body">
                                  <h5 class="card-title">Rayon asked a question about rice pudding</h5>
                                  <p class="card-text">I use gluten free flour, added organic chocolate chips and vanilla paste…YUMMY! Superflabagastic, Extra Ordinary I did have to bake it at 325 for 90 minutes ??.</p>
                              </div>
                          </div>
                      </div>


                      <p class="fs-1">Fan Favorites</p>


                      <div className="container">
                          <div className="row">
                              <div className="col">
                                  <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                      <div className="row g-3">

                                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                              <div class="card">
                                                  <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/30/32/45/19L2ucjQneoEANPzyfiQ_0S9A6363.jpg" class="card-img-top" alt="..." />
                                                  <div class="card-body">
                                                      <p class="fs-4">Oven Baked Ribs</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                              <div class="card">
                                                  <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/30/97/7/7GmgWw4TTUCCw7xGKQAP_0S9A6434.jpg" class="card-img-top" alt="..." />
                                                  <div class="card-body">
                                                      <p class="fs-4">Mozerlle chips</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                              <div class="card">
                                                  <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/28/18/77/ZyG0h2VYRjei7iPFSWNI_food.com-14.jpg" class="card-img-top" alt="..." />
                                                  <div class="card-body">
                                                      <p class="fs-4">Shakshuka</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                              <div class="card">
                                                  <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/63/78/6/NrPa79ZESEOqMlMoFDos_fajitas-3.jpg" class="card-img-top" alt="..." />
                                                  <div class="card-body">
                                                      <p class="fs-4">Fajitas</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                              <div class="card">
                                                  <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/48/66/41/aB9Ar2MzTy2CIyxoINma_b.jpg" class="card-img-top" alt="..." />
                                                  <div class="card-body">
                                                      <p class="fs-4">Banana Nut bread</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                              <div class="card">
                                                  <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/40/49/7/iUlxb54sSWaD9Zp44kfP_FGgWFV4mSVq8aISp1eQG_baked%2520wings%2520(1%2520of%25204).jpg" class="card-img-top" alt="..." />
                                                  <div class="card-body">
                                                      <p class="fs-4">Oven Crisp Chicken</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                              <div class="card">
                                                  <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/16/52/54/XE7h7mpTK69lpb05OhGB_broil-perfect-steak_4984.jpg" class="card-img-top" alt="..." />
                                                  <div class="card-body">
                                                      <p class="fs-4">Boiled Steak</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                              <div class="card">
                                                  <img src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/11/70/31/ieo2HguHQEiy7VYnh9cT_0S9A5095.jpg" class="card-img-top" alt="..." />
                                                  <div class="card-body">
                                                      <p class="fs-4">Brocolli and Garlic Pasta</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <br />
                      <figure class="text-center">
                          <blockquote class="blockquote">
                              <p class="fs-3">Find out more recipes</p>
                          </blockquote>
                          <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="I am hungry.." />
                          <br />
                          <button className="btn btn-warning">Search</button>
                      </figure>
                  </div>
              </div>
          </div>
      </div></>
  )
}

export default Home