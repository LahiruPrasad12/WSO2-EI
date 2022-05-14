import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import auth from "../apis/modules/auth";


export default function Header() {
  const {loggedIn} = useContext(AuthContext);

  const logout = async ()=>{
    await auth.logout();
    localStorage.clear();
    window.location = '/'
  }
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
                {
                  loggedIn !== null && loggedIn.role === 'owner'? <Link to="/homeowner"><li><a>Product Listing Form</a></li></Link>:<Link to="/homeclient"><li><a>Products</a></li></Link>
                }
                <Link to="/"><li><a >Home</a></li></Link>


                <Link to="/"><li><a>Testimonials</a></li></Link>
                {loggedIn === null?<Link to="/login"><li class="btn2">Sign in</li></Link>:<Link to="/login"><li class="btn2" onClick={logout}>Logout</li></Link>}
              </ul>
          </div>
        </div>
      </header>
    </div>
  )
}