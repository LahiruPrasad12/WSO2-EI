import React, { useContext } from 'react';
import LandingPage from "./landing_page/landingPage"
import { Login } from "./views/auth/login"
import Register from "./views/auth/register"
import { ValidationSchemaExample } from './views/Test'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import ClientHome from './views/client/home/home';
import Home_Owner from './views/owner/home/home';
import AuthContext from "./context/AuthContext";
import Cart from './views/client/cart/cart';
import Cardpay from './views/client/payment/cardpay';

const Routers = () => {
    const { loggedIn } = useContext(AuthContext);

    return (
        <Router>
            {
                loggedIn === null && (<>
                    <Route exact path="/login"><Login /></Route>
                    <Route exact path="/register"><Register /></Route>
                    <Route exact path="/" component={LandingPage} />

                    <Route exact path = "/homeowner"><Home_Owner/></Route>
                    <Route exact path = "/homeclient"><ClientHome/></Route>
                    <Route exact path = "/cart"><Cart/></Route>
                    <Route exact path = "/cardpay"><Cardpay/></Route>

                </>)
            }

            {
                loggedIn !== null && (<>
                    <Route exact path="/homeclient"><ClientHome /></Route>
                    <Route exact path="/homeowner"><Home_Owner /></Route>
                </>)
            }

            <Route exact path="/test"><ValidationSchemaExample /></Route>

        </Router>
    );
};

export default Routers;