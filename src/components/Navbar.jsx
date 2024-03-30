import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <p class="fs-1">YumYum</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Recipes
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Breakfast</a></li>
            <li><a class="dropdown-item" href="#">Lunch</a></li>
            <li><a class="dropdown-item" href="#">Dinner</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Popular
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Trending Now</a></li>
            <li><a class="dropdown-item" href="#">Cookie</a></li>
            <li><a class="dropdown-item" href="#">Bread</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Meat nd Seafood
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Chicken</a></li>
            <li><a class="dropdown-item" href="#">Salmon</a></li>
            <li><a class="dropdown-item" href="#">Shrimp</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Healthy and Diet
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Keto</a></li>
            <li><a class="dropdown-item" href="#">Gluten free</a></li>
            <li><a class="dropdown-item" href="#">Vegetarian</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Holidays
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Dinner Party</a></li>
            <li><a class="dropdown-item" href="#">Valentines day Special</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Christmas Special</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <a class="btn btn-primary" href="1" role="button">Profile</a>
        </li>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar