import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/footer';
import Header from '../../layouts/header';
import './itemview.css'

const Itemview = () => {
    return (
<div>
    <Header/>
    <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

        <div class="container" >
        <div className='shopc'>
            <h1>PRODUCT DETAILS</h1>
            <p><Link to="/">Home</Link> / <Link to="/homeclient">Products</Link> / <Link to="/itemview">Item id eka dapan</Link></p>
        </div>
        <div class="container">
            <div class="product-content product-wrap clearfix product-deatil">
                <div class="row">
                    <div class="col-md-5 col-sm-12 col-xs-12">
                        <div class="product-image">
                            <div id="myCarousel-2" class="carousel slide">
                                <div class="carousel-inner">
                                    
                                <div class="cardiv">
                                            <>
                                                <div class="imgBx">
                                                    <img src="https://i.postimg.cc/d1gXtSPP/wd.png" />
                                                </div>
                                            </>
                                        </div>
                                </div>
                                <a class="left carousel-control" href="#myCarousel-2" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a>
                                <a class="right carousel-control" href="#myCarousel-2" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                        <h2 class="name">
                            Mango Plant Pot
                            <small>Product by Ceylon Agri Pvt.Ltd</small>
                        </h2>
                        <hr />
                        <h3 class="price-container">
                            LKR 1500.00
                        </h3>
                        <div class="certified">
                            <ul>
                                <li>
                                    <a style={{ fontSize: '15px'}}>SKU CODE<span>CA2506</span></a>
                                </li>
                                <li>
                                    <a style={{ fontSize: '15px'}}>ITEM SIZE<span>1551</span></a>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div class="description description-tabs">
                            <ul id="myTab" class="nav nav-pills">
                                <li class="active" style={{ color: 'white'}}><a class="btn btn-secondary">Product Description </a></li>
                            </ul>
                            <div class="detail" >
                                    <br />
                                    <p style={{ color: 'gray'}}>
                                        Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue
                                        sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur necsadasdasdasdasd.
                                    </p>
                            </div>       
                            </div>
                        </div>
                        <hr />
                        <div class="rowbt">
                                <button class="btn btn-success btn-lg">Add to Cart</button>
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
export default Itemview;