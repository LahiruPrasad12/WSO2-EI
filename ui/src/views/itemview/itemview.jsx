import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../layouts/footer';
import Header from '../../layouts/header';
import owner from '../../apis/modules/owner'
import { useCart } from 'react-use-cart'
import './itemview.css'

const Itemview = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const { addItem, inCart, items } = useCart();

    const getProduct = async () => {
        try {
            const arr = await owner.getProduct(id)
            setItem(arr.data)
            // setItems(arr.data)
        } catch {
            setItem(null)
        }
    }

    const directToCart = () => {
        window.location = "/cart"
    }

    useEffect(() => {
        getProduct()
    }, [id])

    return (
        <div>
            <Header />
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

            <div class="container" >
                <div className='shopc'>
                    <h1>PRODUCT DETAILS</h1>
                    <p><Link to="/">Home</Link> / <Link to="/homeclient">Products</Link> / {item.sku}</p>
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
                                                        <img src={"http://localhost:5000/img/product/" + item.image} />
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
                                    {item.name}
                                    {/* <small>Product by Ceylon Agri Pvt.Ltd</small> */}
                                </h2>
                                <hr />
                                <h3 class="price-container">
                                    Rs. {item.price}
                                </h3>
                                <div class="certified">
                                    <ul>
                                        <li>
                                            <a style={{ fontSize: '15px' }}>SKU CODE<span>{item.sku}</span></a>
                                        </li>
                                        <li>
                                            <a style={{ fontSize: '15px' }}>ITEM SIZE<span>{item.size}</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                                <div class="description description-tabs">
                                    <ul id="myTab" class="nav nav-pills">
                                        <li class="active" style={{ color: 'white' }}><a class="btn btn-secondary">Product Description </a></li>
                                    </ul>
                                    <div class="detail" >
                                        <br />
                                        <p style={{ color: 'gray' }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="rowbt" key={item.name}>
                                <Link to="/cart">
                                    <button class="btn btn-success btn-lg" onClick={() => addItem(item)}>Add to Cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
<script>

</script>
export default Itemview;