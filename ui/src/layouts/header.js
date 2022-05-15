import React,{ useContext } from "react";
import {Link, Route} from "react-router-dom";
import AuthContext from '../context/AuthContext';
import auth from "../apis/modules/auth";
import {Login} from "../views/auth/login";
import Register from "../views/auth/register";
import LandingPage from "../landing_page/landingPage";
import "../landing_page/landingPagestyle.css";


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

                {/*unauthorized user*/}
                {
                    loggedIn === null && (<>
                      <Link to="/login"><li><a >Home</a></li></Link>
                      <Link to="/login"><li><a>Products</a></li></Link>
                      <Link to="/"><li><a>Testimonials</a></li></Link>
                      <Link to="/login"><li class="btn2">Sign in</li></Link>
                    </>)
                }

                {/*owner routes*/}
                {
                    loggedIn !== null &&loggedIn.role === 'owner'&& (<>
                      <Link to="/homeowner"><li><a>MY Products</a></li></Link>
                      <Link to="/add-product"><li><a>Product Listing Form</a></li></Link>
                      <Link to="/login"><li class="btn2" onClick={logout}>Logout</li></Link>
                    </>)
                }

                {/*client routes*/}
                {
                    loggedIn !== null &&loggedIn.role === 'buyer'&& (<>
                      <Link to="/"><li><a>Home</a></li></Link>
                      <Link to="/homeclient"><li><a>Products</a></li></Link>
                      <Link to="/cart"><li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg></li></Link>
                      <Link to="/login"><li class="btn2" onClick={logout}>Logout</li></Link>
                    </>)
                }





                {/*{loggedIn === null?<Link to="/login"><li class="btn2">Sign in</li></Link>:<Link to="/login"><li class="btn2" onClick={logout}>Logout</li></Link>}*/}
              </ul>
          </div>
        </div>
      </header>
    </div>
  )
}