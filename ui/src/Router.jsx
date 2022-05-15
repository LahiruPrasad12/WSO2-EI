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
import AddProduct from './views/owner/home/addProduct';
import OwnerHome from './views/owner/home/home';
import AuthContext from "./context/AuthContext";
import Cart from './views/client/cart/cart';
import Cardpay from './views/client/payment/cardpay';
import Itemview from './views/itemview/itemview';

const Routers = () => {
    const { loggedIn } = useContext(AuthContext);

    return (
        <Router>

            <Route exact path="/login"><Login /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/" component={LandingPage} />

            {
                loggedIn !== null && (<>
                    <Route exact path="/homeclient"><ClientHome /></Route>
                    <Route exact path="/homeowner"><OwnerHome /></Route>
                    <Route exact path="/add-product"><AddProduct /></Route>
                    <Route exact path="/itemview"><Itemview /></Route>
                    <Route exact path="/cart"><Cart /></Route>
                </>)
            }

            <Route exact path="/test"><ValidationSchemaExample /></Route>

        </Router>
    );
};

export default Routers;