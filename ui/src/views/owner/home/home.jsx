import React, { useState, useEffect } from 'react';
import '../../client/home/chome.css'
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import owner from '../../../apis/modules/owner'

const OwnerHome = () => {

    const [products, setProducts] = useState([]);

    const listProduct = async () => {
        try {
            const productsArr = await owner.listPrduct()
            setProducts(productsArr.data)
        } catch {
            setProducts(null)
        }
    }

    useEffect(() => {
        listProduct()
    }, [])

    return (
        <div>
            <Header />
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />

            <div class="container" >
                <div className='shopc'>
                    <h1>MY PRODUCT LISTING</h1>
                    <p><Link to="/">Home</Link> / Add Product</p>

                </div>
                <div className='c2'>
                    <div class='rowp'>
                        {products.map(item => {
                            return (
                                <div class="cardp">
                                    <>
                                        <div class="imgBx">
                                            <img src={"http://localhost:5000/img/product/" + item.image} />
                                        </div><div class="contentBx">
                                            <h2>{item.name}</h2>
                                            <p style={{ color: '#ffffff' }}>Price : {item.price}</p>
                                            <div class="size">
                                                <h3>Size :</h3>
                                                <span>{item.size}</span>
                                            </div>
                                            <div class="color" style={{ padding: "5px" }}>
                                                <h3>SKU : {item.sku}</h3>
                                            </div>
                                            <div className='btn btn-light'>Edit</div>
                                        </div>
                                    </>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OwnerHome;