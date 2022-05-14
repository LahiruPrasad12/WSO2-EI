import React,{ useContext } from "react";
import {Link, Route} from "react-router-dom";
import AuthContext from '../context/AuthContext';
import auth from "../apis/modules/auth";
import {Login} from "../views/auth/login";
import Register from "../views/auth/register";
import LandingPage from "../landing_page/landingPage";


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
                      <Link to="/homeclient"><li><a>Home</a></li></Link>
                      <Link to="/add-product"><li><a>Products</a></li></Link>
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