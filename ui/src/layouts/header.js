import React from "react";
import { Link } from "react-router-dom";

export default function Header(){

    return (
<div class="big-wrapper">
        <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

        <header>
        <img src="https://i.postimg.cc/qRFy6RzC/slider-left-dec.png" alt="" class="shape" />
          <div class="container">
            <div class="logo">
              <Link to="/"><img src="https://i.postimg.cc/rsPvKTyp/CA.png" alt="Logo" /></Link>
            </div>

            <div class="links">
              <ul>
                <Link to="/"><li><a >Home</a></li></Link>
                <Link to="/home"><li><a>Products</a></li></Link>
                <Link to="/"><li><a>Pricing</a></li></Link>
                <Link to="/"><li><a>Testimonials</a></li></Link>
                <Link to="/login"><li class="btn">Sign in</li></Link>
              </ul>
            </div>

            <div class="overlay"></div>

            <div class="hamburger-menu">
              <div class="bar"></div>
            </div>
          </div>
        </header>
    </div>    
    )
}