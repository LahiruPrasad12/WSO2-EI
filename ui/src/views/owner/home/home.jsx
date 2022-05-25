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
                    <p>My Products</p>

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
                                            <p style={{ color: '#ffffff', paddingTop: "10px"}}>Price : {item.price}</p>
                                            <div class="size">
                                                <h3>Qty :</h3>
                                                <span>{item.size}</span>
                                            </div>
                                            <div class="color" >
                                                <h3>SKU : {item.sku}</h3>
                                            </div>
                                            <Link style={{marginRight: '4%'}} to={`/itemview/${item._id}`}><i class="fas fa-eye"></i> View</Link>
                                            <Link style={{marginRight: '4%'}} to={`/edit-product/${item._id}`}><i class="fas fa-cog"></i> Edit</Link>
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