import React from "react";
import './landingPagestyle.css';
import {Link} from 'react-router-dom';
import Footer from "../layouts/footer";
import Header from "../layouts/header";

export default function LandingPage(){

    return (
        <>
    <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing Page</title>
  </head>
  <body>
    <main>
      <Header/>
      <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />
        <div class="showcase-area">
          <div class="container">
            <div class="left">
              <div class="big-title">
                <h1>Welcome To Ceylon Agri</h1>
                <h1>Start Exploring Now.</h1>
              </div>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
              <div class="cta">
                <Link to="/login"><a href="#" class="btn">Get started</a></Link>
              </div>
            </div>

            <div class="right">
              <img src="https://i.postimg.cc/4yYBmhFD/0c428e8239727076ce2e1716b1ee529eff79ad34466fea57e80c3ebc4336a019821c607b17d5ada3-car-202x158.gif" />
            </div>
              <row></row>
          </div>
        </div>
    </main>
    <Footer/>
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <script src="./app.js"></script>
  </body>
  </>
    )
}