import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import { useCart } from 'react-use-cart';
import './cart.css'

const Cart = () => {
    const [qty, setQty] = useState('')
    const {
        items,
        totalItems,
        isEmpty,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if (isEmpty) return <h1>Your Cart is Empty</h1>
    return (
        <div>
            <Header />
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

            <div class="container" >
                <div className='shopc'>
                    <h1>CART</h1>
                    <p><Link to="/">Home</Link> / <Link to="/cart">Cart</Link></p>
                </div>
                <div class="container pb-5 mt-n2 mt-md-n3">
                    <div class="row">
                        <div class="col-xl-9 col-md-8">
                            <h2 class="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3"><span style={{ fontWeight: "bold", fontSize: "30px", fontfamily: "Poppins" }}>Products</span>
                                <Link to="/homeclient"><a class="font-size-sm" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" style={{ fontWeight: "bold", fontSize: "30px", fontfamily: "Poppins" }}><polyline points="15 18 9 12 15 6"></polyline></svg>Continue Shopping</a></Link></h2>
                            {items.map((item, index) => {
                                return (
                                    <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom" key={index}>
                                        <div class="media d-block d-sm-flex text-center text-sm-left">
                                            <a class="cart-item-thumb mx-auto mr-sm-4" href="#">
                                                <div class="cardc">
                                                    <div class="imgBxc">
                                                        <img src={"http://localhost:5000/img/product/" + item.image} />
                                                    </div>
                                                </div></a>
                                            <div class="media-body pt-3">
                                                <h3 class="product-card-title font-weight-semibold border-0 pb-0"><a href="#">{item.name}</a></h3>
                                                <div class="font-size-sm"><span class="text-muted mr-2">Size:</span>{item.size}</div>
                                                <div class="font-size-sm"><span class="text-muted mr-2">Color:</span>Black</div>
                                                <div class="font-size-sm"><span class="text-muted mr-2">SKU:</span>{item.sku}</div>
                                                <div class="font-size-lg text-primary pt-2">{item.price}</div>
                                            </div>
                                        </div>
                                        <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style={{ width: "10rem" }}>
                                            <div class="form-group mb-2">
                                                <label for="quantity1">{item.quantity}</label>
                                                <input class="form-control form-control-sm" type="number" id="quantity1" value={qty} onChange={(e) => setQty(e.target.value)} />
                                            </div>
                                            <button class="btn btn-outline-secondary btn-sm btn-block mb-2" type="button" onClick={() => updateItemQuantity(item.id, qty + 1)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw mr-1">
                                                    <polyline points="23 4 23 10 17 10"></polyline>
                                                    <polyline points="1 20 1 14 7 14"></polyline>
                                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                                </svg>Update Cart</button>
                                            <button class="btn btn-outline-danger btn-sm btn-block mb-2" type="button" onClick={() => removeItem(item.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 mr-1">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>Remove</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div class="col-xl-3 col-md-4 pt-3 pt-md-0">
                            <h2 class="h6 px-4 py-3 bg-info text-center" style={{ color: 'white' }}>Subtotal</h2>
                            <div class="h3 font-weight-semibold text-center py-3">Cart ({totalUniqueItems}) Total Items ({totalItems}) </div>
                            <div class="h3 font-weight-semibold text-center py-3">{cartTotal}</div>
                            <hr />
                            <h3 class="h6 pt-4 font-weight-semibold"><span class="badge badge-success mr-2">Note</span>Additional Comments</h3>
                            <textarea class="form-control mb-3" id="order-comments" rows="5"></textarea>
                            <Link to="/cardpay"><a class="btn btn-primary btn-block" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card mr-2">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                    <line x1="1" y1="10" x2="23" y2="10"></line>
                                </svg>Proceed to Checkout</a></Link>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cart;