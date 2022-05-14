import React from 'react';
import './chome.css';
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';

const ClientHome = () => {
    return (
<div>
    <Header/>
    <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

        <div class="container" >
            <div className='shopc'>
            <h1>SHOP THE COLLECTION</h1>
            <p><Link to="/">Home</Link> / <Link to="/home">Collection</Link></p>
            </div>
            <div className='c2'>
            <div class='rowp'>
            
            <div class="cardp">
                <div class="imgBx">
                <img src="https://i.postimg.cc/d1gXtSPP/wd.png"/>
                </div>
                <div class="contentBx">
                <h2>Flower Pot</h2>
                <p style={{color:'#ffffff'}}>Price : 1500LKR</p>
                <div class="size">
                    <h3>Size :</h3>
                    <span>7</span>
                </div>
                <div class="color" style={{padding: "5px"}}>
                    <h3>SKU : CA2033</h3>
                </div>
                <div className='btn btn-light' href="#">Add to Cart</div>
                </div>
            </div>
            <div class="cardp">
                <div class="imgBx">
                <img src="https://i.postimg.cc/d1gXtSPP/wd.png"/>
                </div>
                <div class="contentBx">
                <h2>Flower Pot</h2>
                <p style={{color:'#ffffff'}}>Price : 1500LKR</p>
                <div class="size">
                    <h3>Size :</h3>
                    <span>7</span>
                </div>
                <div class="color" style={{padding: "5px"}}>
                    <h3>SKU : CA2033</h3>
                </div>
                <div className='btn btn-light' href="#">Add to Cart</div>
                </div>
            </div><div class="cardp">
                <div class="imgBx">
                <img src="https://i.postimg.cc/d1gXtSPP/wd.png"/>
                </div>
                <div class="contentBx">
                <h2>Flower Pot</h2>
                <p style={{color:'#ffffff'}}>Price : 1500LKR</p>
                <div class="size">
                    <h3>Size :</h3>
                    <span>7</span>
                </div>
                <div class="color" style={{padding: "5px"}}>
                    <h3>SKU : CA2033</h3>
                </div>
                <div className='btn btn-light' href="#">Add to Cart</div>
                </div>
            </div><div class="cardp">
                <div class="imgBx">
                <img src="https://i.postimg.cc/d1gXtSPP/wd.png"/>
                </div>
                <div class="contentBx">
                <h2>Flower Pot</h2>
                <p style={{color:'#ffffff'}}>Price : 1500LKR</p>
                <div class="size">
                    <h3>Size :</h3>
                    <span>7</span>
                </div>
                <div class="color" style={{padding: "5px"}}>
                    <h3>SKU : CA2033</h3>
                </div>
                <div className='btn btn-light' href="#">Add to Cart</div>
                </div>
            </div><div class="cardp">
                <div class="imgBx">
                <img src="https://i.postimg.cc/d1gXtSPP/wd.png"/>
                </div>
                <div class="contentBx">
                <h2>Flower Pot</h2>
                <p style={{color:'#ffffff'}}>Price : 1500LKR</p>
                <div class="size">
                    <h3>Size :</h3>
                    <span>7</span>
                </div>
                <div class="color" style={{padding: "5px"}}>
                    <h3>SKU : CA2033</h3>
                </div>
                <div className='btn btn-light' href="#">Add to Cart</div>
                </div>
            </div><div class="cardp">
                <div class="imgBx">
                <img src="https://i.postimg.cc/d1gXtSPP/wd.png"/>
                </div>
                <div class="contentBx">
                <h2>Flower Pot</h2>
                <p style={{color:'#ffffff'}}>Price : 1500LKR</p>
                <div class="size">
                    <h3>Size :</h3>
                    <span>7</span>
                </div>
                <div class="color" style={{padding: "5px"}}>
                    <h3>SKU : CA2033</h3>
                </div>
                <div className='btn btn-light' href="#">Add to Cart</div>
                </div>
            </div>
            

        
        </div>       
    </div>
</div> 
<Footer/>
</div>
    );
};

export default ClientHome;