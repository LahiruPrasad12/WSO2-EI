import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../layouts/footer';
import Header from '../../../layouts/header';
import owner from '../../../apis/modules/owner'

const Home_Owner = () => {
    const [product, setAddProduct] = useState({
        name: '',
        description: '',
        price: '',
        sku: '',
        size: '',
        stock: '',
        category: '',
        photo: ''
    })

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            // console.log(product)
            const payload = {
                name: product.name,
                description: product.description,
                price: product.price,
                sku: product.sku,
                size: product.size,
                stock: product.stock,
                category: product.category,
                // photo: product.photo
            }

            await owner.createPrduct(payload)
            window.location = '/homeclient'
        } catch (e) {
            // setError('Your email is already exists!!')
        }
    }

    return (
        <>
            <Header />
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />
            <div className='container'>
                <div className='shopc'>
                    <h1>Add Product</h1>
                    <p><Link to="/">Home</Link> / <Link to="/homeowner">Add Product</Link></p>
                </div>
                <form>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*Product Name</label>
                                <input type="text" id="productName" name="productName" className="form-control" placeholder="Enter Product Name" value={product.name} onChange={e => setAddProduct({ ...product, name: e.target.value })} required />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*SKU</label>
                                <input type="text" id="sku" name="sku" className="form-control" placeholder="Enter SKU" value={product.sku} onChange={e => setAddProduct({ ...product, sku: e.target.value })} required />
                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*Size</label>
                        <input type="text" id="size" name="size" className="form-control" placeholder="Enter Size" value={product.size} onChange={e => setAddProduct({ ...product, size: e.target.value })} required />
                    </div>
                    <div className="form-outline mb-4">
                        <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*Price</label>
                        <input type="number" id="price" name="price" className="form-control" placeholder="Enter Price" value={product.price} onChange={e => setAddProduct({ ...product, price: e.target.value })} required />
                    </div>
                    <div className="form-outline mb-4">
                        <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*Stock</label>
                        <input type="number" id="stock" name="stock" className="form-control" placeholder="Enter Stock Quantity" value={product.stock} onChange={e => setAddProduct({ ...product, stock: e.target.value })} required />
                    </div>
                    <div className="form-outline mb-4">
                        <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*Description</label>
                        <textarea className="form-control" id="description" name="description" rows="5" placeholder="Enter Product Description" value={product.description} onChange={e => setAddProduct({ ...product, description: e.target.value })} required></textarea>
                    </div>
                    <div className="form-outline mb-4">
                        <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">*Upload Image</label>
                        <input type="file" id="photo" style={{ width: '300px' }} className="form-control" onChange={e => setAddProduct({ ...product, photo: e.target.files[0] })} required accept=".png" />
                    </div>
                    <br />
                    <center>
                        <button type="submit" className="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
                    </center>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Home_Owner;