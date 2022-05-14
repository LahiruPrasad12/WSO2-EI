import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import './cardpay.css'
import './cardpay'
import $ from 'jquery'

const Cardpay = () => {
    return (
<div>
    <Header/>
    <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

        <div class="container" >
        <div className='shopc'>
            <h1>PAYMENT</h1>
            <p><Link to="/">Home</Link> / <Link to="/cart">Cart</Link> / <Link to="/cardpay">Payment</Link></p>
        </div>

        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet"/>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<script src="https://use.fontawesome.com/aa95071b26.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<div id="bodycp">
  <div class="out-wrap">
    <h1 class="text-center">Enter Card Details</h1>
    <div id="payment" ng-app="myApp" ng-controller="myCtrl">
      <div class="details">
        <div class="input-wrap four-num">
          <label>Card Number</label>
          <input maxlength="4" ng-model="f4" type="text"/>
          <input maxlength="4" ng-model="s4" type="text"/>
          <input maxlength="4" ng-model="t4" type="text"/>
          <input maxlength="4" ng-model="l4" type="text"/>
        </div>
        <div class="input-wrap">
          <label>Card Holder's Name </label>
          <input ng-model="hname" type="text"/>
        </div>
        <div class="halfbox">
        <div class="input-wrap">
          <label>Valid Till</label>
          <div class="twin">
          <input maxlength="2" ng-model="edm" type="text"/>
          <input maxlength="2" ng-model="edy" type="text"/>
          </div>
        </div>
        
        <div class="input-wrap">
          <label>CVV</label>
          <input maxlength="3" ng-model="cvv" type="text"/>
        </div>
      </div>
      </div>
      <div class="card">
        <div>
        <div class="clayout">
          <div class="c-front">
          <p class="chiplogo">
            <span class="chip">
              <b></b></span>
            <span class="logo">
            <b class="master"></b>
            </span>
            </p>
          <p class="cnum">
            <span ng-bind="f4">XXXX</span> - <span ng-bind="s4">XXXX</span> - <span ng-bind="t4">XXXX</span> - <span ng-bind="l4">XXXX</span> 
            </p>
            <p class="cname"><span>Card Holder</span><label ng-bind="hname">PRAVEEN KUMAR GORAKALA</label></p>
            <p  class="cvtr"><span>Valid Till</span><label ng-bind="edm">01</label> / <label ng-bind="edy">28</label></p>
            </div>
          <div class="c-back">
            <p class="topc"><span>136589420</span><span>sddv5</span></p>
            <p class="backit"></p>
            <p class="cvv"><span>CVV</span><b ng-bind="cvv"></b></p>
          <p class="chiplogo">
          <span class="logo">
            <b class="master"></b>
            </span>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
        
        </div>
     
<Footer/>
</div>
    );
};
<script>
    
</script>
export default Cardpay;